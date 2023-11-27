import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TimePickerModal from 'react-native-modal-datetime-picker';
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import { MedicineCard } from '../../components';
import { medicineData, getMarkedDates } from './medicineData';
import { COLORS, SIZES } from '../../styles';
import { auth, database } from '../../services/firebase';
import { doc, getDoc, updateDoc, addDoc } from '@firebase/firestore';
import LoadingComponent from '../others/LoadingComponent';
const ExpandableCalendarScreen = (props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const [modalVisible, setModalVisible] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [items, setItems] = useState([
    {
      title: new Date(),
      data: [],
    },
    {
      title: new Date(),
      data: [],
    },
  ]);
  const [medicineFormData, setMedicineFormData] = useState({
    name: '',
    type: '',
    date: new Date(),
    time: new Date(),
  });
  const [isLoading, setIsLoading] = useState(false);

  const addActivitiesData = async (formattedMedicineData) => {
    const userId = auth.currentUser.uid;
    const { title } = formattedMedicineData;

    try {
      const userDocRef = doc(database, 'medicineData', userId);
      const userDocSnap = await getDoc(userDocRef);
      const data = userDocSnap.data();

      let updatedMedicineData;

      if (data && data.medicineData) {
        // Ensure that data.medicineData is an array before mapping
        console.log(data);
        const existingEntryIndex = data.medicineData.findIndex((entry) => {
          console.log('Comparing:', title, entry?.title);
          return entry?.title == title;
        });

        console.log(existingEntryIndex);

        if (existingEntryIndex !== -1) {
          updatedMedicineData = [...data.medicineData];
          updatedMedicineData[existingEntryIndex].data.push(
            formattedMedicineData.data[0]
          ); // Assuming formattedMedicineData.data is an array with a single object
        } else {
          updatedMedicineData = [
            ...data.medicineData,
            { title, data: [formattedMedicineData.data[0]] },
          ];
        }
      } else {
        updatedMedicineData = [
          { title, data: [formattedMedicineData.data[0]] },
        ];
      }

      const sortedItems = updatedMedicineData.sort(
        (a, b) => new Date(a.title) - new Date(b.title)
      );

      setItems(sortedItems);

      await updateDoc(userDocRef, { medicineData: updatedMedicineData });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  useEffect(() => {
    const getMedicineData = async () => {
      const userId = auth.currentUser.uid;
      const userDocRef = doc(database, 'medicineData', userId);
      const userDocSnap = await getDoc(userDocRef);
      const data = userDocSnap.data();
  
      if (data?.medicineData) {
        const sortedItems = data.medicineData.sort(
          (a, b) => new Date(a.title) - new Date(b.title)
        );
  
        if (data.medicineData.length >= 2) {
          setItems(sortedItems);
        } else {
          setItems((prev) => [...prev, ...sortedItems]);
        }
      }
    };
  
    if (medicineData.length !== 0) {
      getMedicineData();
    }
  }, []);

  const handleModalClose = () => {
    // Reset the form data and hide the modal
    setMedicineFormData({
      name: '',
      type: '',
      date: new Date(),
      time: new Date(),
    });
    setModalVisible(false);
  };

  const handleSaveMedicine = () => {
    console.log(medicineFormData);
    const formattedMedicineData = {
      title: medicineFormData.date.dateString,
      data: [
        {
          hour: medicineFormData.time.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          duration: '1h',
          title: medicineFormData.name,
        },
      ],
    };
    addActivitiesData(formattedMedicineData);

    handleModalClose();
  };

  const handleTimeChange = (time) => {
    setShowTimePicker(false);
    setMedicineFormData({
      ...medicineFormData,
      time: time,
    });
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const hideTimepicker = () => {
    setShowTimePicker(false);
  };

  const renderItem = useCallback(({ item }) => {
    return <MedicineCard item={item} />;
  }, []);

  return (
    <>
      {!isLoading ? (
        <CalendarProvider date={items[1]?.title} showTodayButton>
          {weekView ? (
            <WeekCalendar
              testID={testIDs.weekCalendar.CONTAINER}
              firstDay={1}
              markedDates={marked.current}
              onDayPress={(day) => {
                setMedicineFormData({ ...medicineFormData, date: day });
                setModalVisible(true);
              }}
            />
          ) : (
            <ExpandableCalendar
              firstDay={1}
              markedDates={marked.current}
              onDayPress={(day) => {
                setMedicineFormData({ ...medicineFormData, date: day });
                setModalVisible(true);
              }}
            />
          )}
          <AgendaList
            sections={items}
            renderItem={renderItem}
            sectionStyle={styles.section}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleModalClose}
          >
            <View style={styles.background}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Add Medicine</Text>

                <Text style={styles.label}>Medicine Name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter medicine name"
                  value={medicineFormData.name}
                  onChangeText={(text) =>
                    setMedicineFormData({ ...medicineFormData, name: text })
                  }
                />

                <Text style={styles.label}>Medicine Type:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter medicine type"
                  value={medicineFormData.type}
                  onChangeText={(text) =>
                    setMedicineFormData({ ...medicineFormData, type: text })
                  }
                />

                <View style={styles.time}>
                  <Text style={styles.label}>Time:</Text>
                  <TouchableOpacity onPress={showTimepicker}>
                    <Text style={styles.dateText}>
                      {medicineFormData.time.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TimePickerModal
                  isVisible={showTimePicker}
                  onConfirm={handleTimeChange}
                  onCancel={hideTimepicker}
                  mode="time"
                />

                <View style={styles.bottom}>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSaveMedicine}
                  >
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleModalClose}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </CalendarProvider>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: COLORS.gray3,
  },
  section: {
    backgroundColor: COLORS.lightGray2,
    color: COLORS.gray3,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white', // Set a background color for iOS shadow to appear
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    backgroundColor: COLORS.red,
    padding: 3,
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    padding: 10,
    borderRadius: 8,
    color: COLORS.white,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    borderRadius: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: COLORS.red,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
    width: '50%',
  },
  cancelButton: {
    backgroundColor: COLORS.red,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
    width: '50%',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default ExpandableCalendarScreen;
