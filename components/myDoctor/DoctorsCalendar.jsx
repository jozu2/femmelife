import React, { useEffect, useState } from 'react';
import { Modal, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from "@react-native-picker/picker";
import { auth, database } from '../../services/firebase';
import { collection, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';

const DoctorsCalendar = () => {
  const [markedDates, setMarkedDates] = useState({
   
    '2023-11-17': { selected: true, marked: true, appointments: 3 },
  });
  const [showModal, setShowModal] = useState(false)
  const [time, setTime] = useState(null)
  const [saveDate, setSaveDate] = useState(null)
  const [patientFormData, setPatientFormData] = useState(null)
  const handleModalClose = () => {
    setMedicineFormData({
      name: '',
      type: '',
      date: new Date(),
      time: new Date(),
    });
    setModalVisible(false);
  };
  const handleDayPress = (date) => {

    setShowModal(true)
    setSaveDate(date)
    // if (markedDates[date.dateString] && markedDates[date.dateString].marked) {
    //   Alert.alert('Appointments', `${markedDates[date.dateString].appointments}/10 appointments`);
    // }
  };
  const [selectedFaculty, setselectedFaculty] = useState("");
  const [ Faculty , setFaculty] = useState(null)
  const handleDayLongPress = (date) => {
    // if needed
  };

  const handleInputChange = (text) => {
    setTime(text);
  };

  console.log(time)
  console.log(selectedFaculty.userId)
  useEffect(() => {
    const usersCollectionRef = collection(database, 'users');
  
    const unsubscribe = onSnapshot(usersCollectionRef, (usersSnapshot) => {
      try {
        const usersData = [];
  
        usersSnapshot.forEach((doc) => {
          if (doc.exists()) {
            const userData = { id: doc.id, ...doc.data() };
            if (userData.role !== 'doctor') {
              usersData.push(userData);
            }
          }
        });
  
        setFaculty(usersData);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    });
  
    return () => unsubscribe();
  }, []);

  const handleAdd = async () => {
    if(selectedFaculty === ''){
      alert('Please Select Patient')
      return
    }
    if(time === null){
      alert('please fill up the form')
      return
    }

    const userId = auth.currentUser.uid;
    console.log(userId)
    try {
      const userDocRef = doc(database, 'appointments', userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {

        await updateDoc(userDocRef, {
          [selectedFaculty.userId]: {name: selectedFaculty.name, time: time, date: saveDate.dateString, done: false, id: selectedFaculty.userId},
    
        });
        console.log('Data updated successfully!');
        alert('Added successfully!')
        setShowModal(false)
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <>
       <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={handleModalClose}
          >
            <View style={{backgroundColor: 'red', flex: 1,  backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{  backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 20,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 'bold',marginBottom: 15}}>Add Appointment</Text>

             
<View

style={{ width: '90%', borderRadius: 10, borderWidth :1, paddingHorizontal: 20, marginBottom: 10, borderTopColor: '#fff', borderLeftColor: '#fff', borderRightColor: '#fff'}}
>
        {Faculty && (  <Picker
          selectedValue={selectedFaculty}
          onValueChange={(itemValue, itemIndex) =>
            setselectedFaculty(itemValue)
          }
        >
          <Picker.Item
            label="Select Patient"
            value=""

          />
          {Faculty.map((faculty, index) => (
            <Picker.Item label={faculty.name} value={faculty} key={index} />
          ))}
        </Picker>)}
        </View>
            <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}} >Time:</Text>
                <TextInput
                 style={{ width: '50%', paddingVertical: 6, borderRadius: 10, borderWidth :1,  paddingHorizontal: 20, marginVertical: 20, marginLeft: 15}}
                 onChangeText={handleInputChange} // Set the value to state on each change
                 value={time} // Set the current state value as the value of TextInput
                  placeholder="00:00"
              
                />
            </View>

             <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginBottom: 10}}>

             <TouchableOpacity onPress={()=>{
                setShowModal(false)
              }}
              style={{
                backgroundColor: 'gray', paddingHorizontal: 20,paddingVertical: 10,borderRadius: 30,borderWidth: 1
              }}>
                <Text style={{fontSize: 18, color: '#fff'}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAdd}
              style={{
                backgroundColor: 'pink', paddingHorizontal: 20,paddingVertical: 10,borderRadius: 30,borderWidth: 1, marginLeft: 20
              }}>
                <Text style={{fontSize: 18, color: '#fff', }}>ADD</Text>
              </TouchableOpacity>

              
             </View>

              </View>
            </View>
          </Modal>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        onDayLongPress={handleDayLongPress}
        style={{ borderRadius: 12 }}
      />
    </>
  );
};

export default DoctorsCalendar;

const styles = StyleSheet.create({

});
