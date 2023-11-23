import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import STYLES from '../../styles/global.style';
import styles from './styles/patientDetailsEdit.style';
import SafeAreaView from 'react-native-safe-area-view';
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database } from '../../services/firebase';
import { COLORS } from '../../styles';

const PatientDetailsEditScreen = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const patient1Ref = doc(database, 'doctorsData', 'testData', 'patients', 'patient1');
        const documentSnap = await getDoc(patient1Ref);

        if (documentSnap.exists()) {
          const patientData = documentSnap.data();

          // Initialize form fields with existing data
          Object.keys(patientData).forEach((field) => {
            setValue(field, patientData[field]);
          });
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchPatientData();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      const patient1Ref = doc(database, 'doctorsData', 'testData', 'patients', 'patient1');
      await updateDoc(patient1Ref, data);

      Alert.alert('Success', 'Patient data updated successfully');
    } catch (error) {
      console.error('Error updating patient data:', error);
      Alert.alert('Error', 'Failed to update patient data');
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={COLORS.secondary} />
      </View>
    );
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={120}
        behavior="padding"
      >
        <ScrollView>
          <View style={styles.wrapper}>

            <Text style={styles.title}>Patients Info</Text>

            {/* Patient's Info Section */}
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="name"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Messenger</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Messenger"
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="messenger"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Address</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Address"
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="address"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Contact Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Contact Number"
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="contactNumber"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Email address'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name='email'
              rules={{ required: true }}
              defaultValue=''
            />


            {/* Medical Details Section */}
            <Text style={[styles.title, { marginTop: 8 }]}>Medical Details</Text>
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Weight (kg)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Weight'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="weight"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Blood Pressure (mm/Hg)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Blood Pressure'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="bloodPressure"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Breast Lumps</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Breast Lumps'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="breastLumps"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Hirsutism</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Hirsutism'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="hirsutism"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>BMI</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='BMI'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="BMI"
              defaultValue=""
            />

            <View style={styles.divider}></View>

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Irregular Period</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Irregular Period'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="irregularPeriod"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Excessive Hair Growth</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Excessive Hair Growth'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="excessiveHairGrowth"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Acne</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Acne'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="acne"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Infertility</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Infertility'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="infertility"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Mood Swings</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Mood Swings'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="moodSwings"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Weight Gain</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Weight Gain'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="weightGain"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Dark Patches on Skin</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Dark Patches on Skin'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="darkPatchesOnSkin"
              defaultValue=""
            />

            <View style={styles.divider}></View>

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Hormone Levels</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Hormone Levels'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="hormoneLevels"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Blood Sugar Levels</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Blood Sugar Levels'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="bloodSugarLevels"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Cholesterol Levels</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Cholesterol Levels'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="cholesterolLevels"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Pap Smear</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Pap Smear'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="papSmear"
              defaultValue=""
            />

            <View style={styles.divider}></View>

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Vulva and Vagina Abnormalities</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Vulva and Vagina Abnormalities'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="vulvaAndVaginaAbnormalities"
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Bimanual Exam</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Bimanual Exam'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="bimanualExam"
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Speculum Exam</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Speculum Exam'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="speculumExam"
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field }) => (
                <React.Fragment>
                  <Text style={styles.inputLabel}>Thyroid Function Test</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Thyroid Function Test'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                </React.Fragment>
              )}
              name="thyroidFunctionTest"
              defaultValue=""
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PatientDetailsEditScreen;
