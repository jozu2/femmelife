import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import { COLORS, SIZES } from '../../styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const DoctorCard = (props) => {
  const { name, image, specialty, onPress } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DoctorDetailsScreen')}
      style={styles.doctorCard}
      activeOpacity={0.8}
    >
      <Image
        source={require('../../assets/images/doctor1.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>Dr. Josefina Dela Cruz</Text>
        <View style={styles.detailsRow}>
          <MaterialCommunityIcons name='stethoscope' color={COLORS.gray} size={14} />
          <Text style={styles.specialty}>OB Gynecologist</Text>
        </View>
        <View style={styles.detailsRow}>
          <MaterialCommunityIcons name='map-marker-outline' color={COLORS.gray} size={14} />
          <Text style={styles.location}>Guagua, Pampanga</Text>
        </View>
      </View>
      <Ionicons name='heart' color={COLORS.primaryDarker} size={22} style={styles.favoriteIcon} />
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  doctorCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    gap: SIZES.medium,
    marginTop: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,

  },
  image: {
    borderRadius: 8,
    height: 75,
    width: 75,
    resizeMode: 'contain',
  },
  name: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.medium + 1,
    marginBottom: 4,
  },
  specialty: {
    color: COLORS.gray,
    fontFamily: 'medium',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  location: {
    color: COLORS.gray,
    fontFamily: 'medium',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 14,
    right: 12,
  },
});
