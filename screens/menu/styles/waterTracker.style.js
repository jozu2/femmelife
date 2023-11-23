import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  aveWaterIntake: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.xLarge + 4,
    marginBottom: 2,
  },
  aveWaterIntakeDate: {
    color: COLORS.darkGray,
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  circularProgressWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    alignItems: "center",
    paddingVertical: SIZES.medium,
    marginVertical: SIZES.medium,
  },
  circularProgressValue: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.xxLarge * 1.2,
    marginBottom: -8,
  },
  // for the subtitle of the progress value of the chart
  circularProgressTitle: {
    color: COLORS.gray3,
    fontSize: SIZES.xLarge - 2,
    fontFamily: "semibold",
    textTransform: "uppercase",
  },
  progressInfoWrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.small,
    marginTop: SIZES.medium,
  },
  infoLabel: {
    color: COLORS.gray3,
    fontSize: SIZES.medium,
    fontFamily: 'medium',
  },
  infoValue: {
    color: COLORS.lightBlack,
    fontSize: SIZES.xLarge,
    fontFamily: 'semibold',
  },
  myStatisticsBtn: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    padding: SIZES.small + 2,
  },
  myStatisticsText: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
  },
});

export default styles;
