import React from 'react';
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Header, MealCard, MoodCard } from '../../components';
import STYLES from '../../styles/global.style';
import styles from './styles/homeScreen.style';
import { connect } from 'react-redux';
import { updateWaterIntake } from '../../context/actions/waterTrackerActions';

const moodData = [
  {
    image: require("../../assets/images/happy.png"),
    label: 'Happy',
  },
  {
    image: require("../../assets/images/sad.png"),
    label: 'Sad',
  },
  {
    image: require("../../assets/images/stressed.png"),
    label: 'Stressed',
  },
  {
    image: require("../../assets/images/energetic.png"),
    label: 'Energetic',
  },
  {
    image: require("../../assets/images/neutral.png"),
    label: 'Neutral',
  },
];

// temporary data
const mealsData = [
  {
    id: 1,
    label: 'Breakfast',
    mealName: 'Fried egg with rice',
    calories: '350',
    mealServings: '1.2',
    carbs: '25',
    protein: '9',
    fat: '6',
  },
  {
    id: 2,
    label: 'Lunch',
    mealName: 'Adobo with rice',
    calories: '520',
    mealServings: '1.5',
    carbs: '45',
    protein: '16',
    fat: '14',
  },
  {
    id: 3,
    label: 'Snack',
    mealName: 'Pandesal with jam',
    calories: '280',
    mealServings: '2',
    carbs: '16',
    protein: '4',
    fat: '3',
  },
  {
    id: 4,
    label: 'Dinner',
    mealName: 'Fried tilapia with rice',
    calories: '400',
    mealServings: '1',
    carbs: '35',
    protein: '13',
    fat: '10',
  },
];

const HomeScreen = ({ waterIntake, updateWaterIntake }) => {

  const onPressGlass = () => {
    const newWaterIntake = waterIntake + 200;
    updateWaterIntake(newWaterIntake);
  }


  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ overflow: 'visible' }}
      >
        <View style={STYLES.wrapper}>
          {/* profile name and photo, period info card */}
          <Header />

          {/* mood */}
          <View style={styles.moods}>
            <Text style={styles.sectionTitle}>How do you feel today?</Text>
            <View style={styles.row}>
              {moodData.map((mood, index) => (
                <MoodCard
                  key={index}
                  image={mood.image}
                  label={mood.label}
                />
              ))}
            </View>
          </View>

          {/* meal plans */}
          <View style={styles.mealPlan}>
            <Text style={styles.sectionTitle}>Today's meal plan</Text>
            <View style={[styles.row, { gap: 14 }]}>
              {mealsData.map((item) => (
                <MealCard
                  key={item.id.toString()}
                  {...item}
                  label={item.label}
                  mealName={item.mealName}
                  mealServings={item.mealServings}
                  calories={item.calories}
                  protein={item.protein}
                  carbs={item.carbs}
                  fat={item.fat}
                />
              ))}
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionCard}>
                <Text style={styles.calorieTrackerTitle}>Total calories for today</Text>
                <Text style={styles.count}>
                  1550 <Text style={styles.calorieCountLabel}>kcal</Text>
                </Text>
                <View style={styles.totalCountSection}>
                  <Text style={styles.totalCountText}>
                    <Text style={styles.totalCountTextAccent}>121g</Text> carbs
                  </Text>
                  <Text style={styles.totalCountText}>
                    <Text style={styles.totalCountTextAccent}>42g</Text> protein</Text>
                  <Text style={styles.totalCountText}>
                    <Text style={styles.totalCountTextAccent}>33g</Text> fat
                  </Text>
                </View>
              </View>
              <View style={styles.sectionCard}>
                <Text style={styles.calorieTrackerTitle}>Water intake tracker</Text>
                <Text style={styles.count}>
                  {waterIntake}/2000 <Text style={styles.calorieCountLabel}>ml</Text>
                </Text>
                <View style={STYLES.row}>
                  <TouchableOpacity onPress={onPressGlass}>
                    <Image
                      source={require('../../assets/images/water-glass.png')}
                      style={styles.waterImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.waterText}>You are almost there!</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  waterIntake: state.waterTracker.waterIntake,
});

const mapDispatchToProps = {
  updateWaterIntake,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
