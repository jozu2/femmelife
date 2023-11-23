import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles/theme";

const styles = StyleSheet.create({
  sectionTitle: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: SIZES.medium,
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

export default styles;
