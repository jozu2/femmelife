import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { auth, database } from '../../services/firebase';


const PatientCard = ({ image, name, id, contactNumber, onPress }) => {
  const navigation = useNavigation();
  const [userData, setUserData]=useState(null)
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
  
        setUserData(usersData);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <>{
      userData && (
        <>
        {userData.map((item) => (
    <TouchableOpacity 
    key={item.id}
    onPress={ async () => {
               
      const userId = auth.currentUser.uid;
      try {
        const userDocRef = doc(database, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);
    
        if (userDocSnap.exists()) {
          await updateDoc(userDocRef, {
            currentViewed: item.id
          });
        
          console.log('Data updated successfully!');
        }
      } catch (error) {
        console.error('Error updating user data:', error);
      }
  
  navigation.navigate('PatientDetails')
                }}
         
    style={styles.wrapper} 
    activeOpacity={0.8}
  >
    <View style={[styles.row, { justifyContent: 'space-between' }]}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View>
            <Text style={styles.details}>{item.email}</Text>
            <Text style={styles.lastVisit}>{item.dateCreated}</Text>
          </View>
        </View>
      </View>
      <Ionicons name='chevron-forward' size={22} color={COLORS.gray} />
    </View>
  </TouchableOpacity>
  ))}</>
      )
    }</>
  );
};

export default PatientCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    gap: SIZES.small,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 1000,
  },
  row: {
    flexDirection: 'row',
    gap: SIZES.small + 2,
    alignItems: 'center'
  },
  name: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 4,
  },
  details: {
    color: COLORS.gray,
    fontFamily: 'medium',
  },
  lastVisit: {
    color: COLORS.gray,
    fontFamily: 'medium',
  },
});
