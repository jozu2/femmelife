import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  barGraphWrapper: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.medium,
    marginHorizontal: -SIZES.medium,
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.small,
  },
  axisLabel: {
    color: COLORS.gray,
    fontFamily: 'medium',
    fontSize: SIZES.small + 1,
  },
  yAxisLabel: {
    marginHorizontal: 6,
  },
  weekDate: {
    color: COLORS.gray,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    marginBottom: SIZES.small,
  },
  todayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium + 2,
  },
  todaysText: (fontFamily) => ({
    color: COLORS.lightBlack,
    fontFamily: fontFamily,
    fontSize: SIZES.medium,
  }),
  mostUsedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  waterImg: {
    height: 38,
    width: 38,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray2,
    marginVertical: SIZES.small,
  },
});

export default styles;