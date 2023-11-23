import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  barChartWrapper: {
    backgroundColor: COLORS.white,
    marginVertical: SIZES.medium,
    marginHorizontal: -16,
    overflow: "hidden",
    paddingVertical: SIZES.large,
    paddingHorizontal: 8,
  },
  axisLabel: {
    color: COLORS.gray,
    fontFamily: "medium",
    fontSize: SIZES.small + 1,
  },
  sleepDataWrapper: {
    marginBottom: SIZES.medium,
  },
  sleepDataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  aveSleepTime: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.xLarge + 5,
  },
  aveSleepTimeDate: {
    color: COLORS.gray,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
  lastNightSleepCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lastNightSleepTitle: {
    color: COLORS.darkGray,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
  },
  lastNightSleepHrs: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.xLarge + 5,
  },
  lastNightSleepTime: {
    color: COLORS.gray,
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  wakeUpImg: {
    width: 140,
    height: SIZES.height * 0.1,
    alignSelf: "flex-end",
    marginRight: -8,
  },
  dailySleepScheduleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.medium,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: SIZES.small,
    padding: SIZES.small + 2,
  },
  dailySleepScheduleText: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
  },
  todayScheduleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todayScheduleImg: {
    width: 40,
    height: 40,
    marginRight: 6,
  },
  todayScheduleSectionTitle: {
    color: COLORS.darkGray,
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 4,
  },
  todayScheduleSectionSubtitle: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
    marginBottom: 4,
  },
});

export default styles;
