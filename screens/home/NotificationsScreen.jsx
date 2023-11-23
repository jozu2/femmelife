import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import { Notification } from '../../components';
import { SIZES } from '../../styles';


const NotificationsScreen = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={[STYLES.wrapper, { marginTop: SIZES.small }]}>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({

});