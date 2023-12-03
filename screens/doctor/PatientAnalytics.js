import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useEffect } from "react";
import { auth, database } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { COLORS, SIZES } from "./../../styles/theme";
import STYLES from "./../../styles/global.style";

const PatientAnalytics = () => {
  const [patientId, setPatientId] = useState(null);
  const [patientDataActivities, setPatientActivities] = useState(null);

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

    const fetchPatientData = async () => {
      try {
        const patient1Ref = doc(database, "activitiesData", patientId);
        const documentSnap = await getDoc(patient1Ref);
        if (documentSnap.exists()) {
          const patientData = documentSnap.data();
          setPatientActivities(patientData);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [patientId]);
  const [fetchDoneData, setFetchDOneData] = useState(null);
  useEffect(() => {
    if (patientId === null) return;

    const fetchPatientData = async () => {
      try {
        const patient1Ref = doc(database, "sleepTracker", patientId);
        const documentSnap = await getDoc(patient1Ref);
        const patientData = documentSnap.data();
        const fetchDone = patientData.recent;
        let formattedData = [];
        if (documentSnap.exists()) {
          if (fetchDone) {
            if (Array.isArray(fetchDone)) {
              formattedData = fetchDone;
            } else if (typeof fetchDone === "object") {
              formattedData = Object.entries(fetchDone).map(([key, value]) => ({
                [key]: value,
              }));
            } else {
              console.warn("fetchDone is of unsupported type:", fetchDone);
            }
          }

          setFetchDOneData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <ScrollView>
      {patientId && patientDataActivities && (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.sectionTitle}>Patient's activities stats</Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.statsCard(SIZES.height * 0.2232),
                { justifyContent: "center" },
              ]}
            >
              <Text style={[styles.statsTitle(), { alignSelf: "center" }]}>
                Finished
              </Text>
              <Text
                style={[
                  styles.statsCount(SIZES.xxLarge),
                  { alignSelf: "center" },
                ]}
              >
                {patientDataActivities.totalActivities}
              </Text>
              <Text style={styles.completedActivities}>
                Completed activities
              </Text>
            </View>
            <View
              style={[
                styles.statsCard(SIZES.height * 0.2232),
                { justifyContent: "center" },
              ]}
            >
              <Text style={[styles.statsTitle(), { alignSelf: "center" }]}>
                Calories Burned
              </Text>
              <Text
                style={[
                  styles.statsCount(SIZES.xxLarge),
                  { alignSelf: "center" },
                ]}
              >
                {patientDataActivities.totalActivities}
              </Text>
              <Text style={styles.completedActivities}>kcal</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Patient's Water Intake</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              paddingHorizontal: 30,
              paddingVertical: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ marginRight: 30, fontSize: 23, color: "#696969" }}>
              {patientDataActivities
                ? `Progress: ${
                    (patientDataActivities.waterIntake / 2000) * 100
                  }%`
                : `Progress : 0%`}
            </Text>
            <Text
              style={{ fontSize: 23 }}
            >{`${patientDataActivities?.waterIntake}ml | 2000ml`}</Text>
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 50 }]}>
            Patient's Sleep Data
          </Text>

          <Text
            style={{
              paddingVertical: 10,
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              borderRadius: 12,
            }}
          >
            {fetchDoneData !== null &&
              fetchDoneData.map((data, index) => {
                const key = Object.keys(data)[0];
                const dataxD = data[key];
                // Check if dataxD is defined before trying to replace the negative sign
                const positiveDataxD = dataxD ? dataxD.replace(/-/, "") : "";

                return (
                  <Text
                    style={{
                      fontSize: 20,
                      backgroundColor: "#fff",
                    }}
                    key={index}
                  >{`${key} : ${positiveDataxD}`}</Text>
                );
              })}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default PatientAnalytics;

const styles = StyleSheet.create({
  sectionTitle: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.large + 6,
    marginBottom: 10,
    marginTop: 20,
  },
  cardRows: {
    flexDirection: "row",
    gap: SIZES.small,
    marginBottom: SIZES.small,
  },
  statsCard: (height) => ({
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    width: SIZES.width * 0.45,
    height: height,
    marginHorizontal: 7,
    padding: SIZES.small,
  }),
  statsTitle: (marginBtm) => ({
    color: COLORS.lightBlack,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    marginBottom: marginBtm,
  }),
  statsCount: (size) => ({
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: size,
  }),
  statsCountLabel: {
    color: COLORS.gray3,
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  completedActivities: {
    color: COLORS.gray3,
    fontFamily: "medium",
    fontSize: SIZES.medium,
    textAlign: "center",
    marginBottom: SIZES.medium,
  },
  goalAchievedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
  },
  goalAchieved: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  goalStreak: {
    color: COLORS.gray3,
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
});
