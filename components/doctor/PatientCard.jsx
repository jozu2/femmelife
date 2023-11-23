import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const PatientCard = ({ image, name, id, contactNumber, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('PatientDetails')} 
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
            <Text style={styles.name}>Juana Cruz</Text>
            <View>
              <Text style={styles.details}>ID: 01123457</Text>
              <Text style={styles.lastVisit}>Last Visit: 15 Nov 2023</Text>
            </View>
          </View>
        </View>
        <Ionicons name='chevron-forward' size={22} color={COLORS.gray} />
      </View>
    </TouchableOpacity>
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
