import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../../styles";
import { auth, database } from "../../services/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const MealPlan = () => {
  const breakfastData = [
    {
      id: 1,
      name: "Scrambled Egg ",
      name2: "and Tomato Sandwich",
      label: "Breakfast",

      servings: 2,
      calories: 200,
      img: "https://www.myhealthybreakfast.in/images/snacks/2021/scrambled-egg-sandwich.jpg",
    },
    {
      id: 2,
      label: "Breakfast",

      name: "Ginisang Munggo ",
      name2: "with Sotanghon ",
      servings: 1,
      calories: 238,
      img: "https://www.kawalingpinoy.com/wp-content/uploads/2018/06/ginisang-munggo-sotanghon-4.jpg",
    },
  ];

  const lunchData = [
    {
      id: 3,
      label: "Lunch",

      name: "Salmon with ",
      name2: "Calamansi and Toyo",
      img: "https://thequirinokitchen.com/wp-content/uploads/2017/04/AsianInAmericaSalmonTeriyakiHoneyCameraCU-e1491349317487.jpg",
      servings: 1,
      calories: 443,
    },
    {
      id: 4,

      name: "Teriyaki Salmon ",
      name2: "",
      label: "Lunch",

      img: "https://www.wellplated.com/wp-content/uploads/2023/05/Best-Teriyaki-Salmon.jpg",
      servings: 1,
      calories: 506,
    },
  ];

  const dinnerData = [
    {
      id: 5,
      label: "Dinner",

      name: "Lemon Garlic ",
      name2: " Butter Salmon",
      img: "https://www.cookingclassy.com/wp-content/uploads/2017/02/skillet-seared-salmon-2.jpg",
      servings: 2,
      calories: 510,
    },
    {
      id: 6,
      label: "Dinner",
      name: "Monggo Beans",
      name2: "",
      img: "https://sweetsimplevegan.com/wp-content/uploads/2022/10/Ginisang-munggo-mung-bean-soup-sweet-simple-vegan-6.jpg",
      servings: 1,
      calories: 223,
    },
  ];
  const [selectedBreakfast, setSelectedBreakfast] = useState({});
  const [selectedLunch, setSelectedLunch] = useState({});
  const [selectedDinner, setSelectedDinner] = useState({});
  const [patientId, setPatientId] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const userId = auth.currentUser.uid;
        const patient1Ref = doc(database, "users", userId);
        const documentSnap = await getDoc(patient1Ref);

        if (documentSnap.exists()) {
          const patientData = documentSnap.data();

          setPatientId(patientData.currentViewed);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    fetchPatientData();
  }, []);

  useEffect(() => {
    if (patientId === null) return;
    if (selectedBreakfast.name && selectedLunch.name && selectedDinner.name) {
      Alert.alert("Done Adding Meal Plan?", "", [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            try {
              const userDocRef = doc(database, "mealPlan", patientId);
              const userDocSnap = await getDoc(userDocRef);

              if (userDocSnap.exists()) {
                await updateDoc(userDocRef, {
                  meal: [selectedBreakfast, selectedDinner, selectedLunch],
                });

                navigation.goBack();
                console.log("Data updated successfully!");
                alert("Added Succesfully");
              }
            } catch (error) {
              console.error("Error updating user data:", error);
            }
          },
        },
      ]);
    }
  }, [selectedBreakfast, selectedLunch, selectedDinner]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ebebeb",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 29,
          color: COLORS.secondary,
        }}
      >
        BreakFast
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          paddingVertical: 15,
          width: "90%",
          borderRadius: 12,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {breakfastData &&
          breakfastData.map((data, index) => (
            <View
              key={index}
              style={{
                marginHorizontal: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  setSelectedBreakfast(data);
                }}
              >
                <Image
                  source={{ uri: data.img }}
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 12,
                    borderWidth: 5,
                    borderColor:
                      selectedBreakfast.name === data.name
                        ? COLORS.secondary
                        : "transparent",
                  }}
                />
              </Pressable>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 15, fontWeight: "400", marginTop: 10 }}
              >
                {data.name}
              </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 15, fontWeight: "400" }}
              >
                {data.name2}
              </Text>
            </View>
          ))}
      </View>

      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 29,
          color: COLORS.secondary,
        }}
      >
        Lunch
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          paddingVertical: 15,
          width: "90%",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {lunchData &&
          lunchData.map((data, index) => (
            <View
              key={index}
              style={{
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Pressable
                onPress={() => {
                  setSelectedLunch(data);
                }}
              >
                <Image
                  source={{ uri: data.img }}
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 12,
                    borderWidth: 5,
                    borderColor:
                      selectedLunch.name === data.name
                        ? COLORS.secondary
                        : "transparent",
                  }}
                />
              </Pressable>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 15, fontWeight: "400", marginTop: 10 }}
              >
                {data.name}
              </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 15, fontWeight: "400" }}
              >
                {data.name2}
              </Text>
            </View>
          ))}
      </View>

      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 29,
          color: COLORS.secondary,
        }}
      >
        Dinner
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          paddingVertical: 15,
          width: "90%",
          borderRadius: 12,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {dinnerData &&
          dinnerData.map((data, index) => (
            <View
              key={index}
              style={{
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Pressable
                onPress={() => {
                  setSelectedDinner(data);
                }}
              >
                <Image
                  source={{ uri: data.img }}
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 12,
                    borderWidth: 5,
                    borderColor:
                      selectedDinner.name === data.name
                        ? COLORS.secondary
                        : "transparent",
                  }}
                />
              </Pressable>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 15, fontWeight: "400", marginTop: 10 }}
              >
                {data.name}
              </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 15, fontWeight: "400" }}
              >
                {data.name2}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default MealPlan;

const styles = StyleSheet.create({});
