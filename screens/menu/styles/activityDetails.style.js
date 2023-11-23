import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  sectionHeader: {
    marginBottom: SIZES.medium,
  },
  title: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.xLarge + 4,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 4,
  },
  icon: {
    marginTop: 2,
  },
  duration: {
    color: COLORS.gray,
    fontFamily: 'medium',
    fontSize: SIZES.medium - 1,
  },
  description: {
    color: COLORS.lightBlack,
    fontFamily: 'regular',
    fontSize: SIZES.medium ,
    lineHeight: 25.6, // font size x 1.6
  },
  timerWrapper: {
    alignItems: 'center',

  },
  timer: {
    
  },
  timerCount: {
    color: COLORS.lightBlack,
    fontFamily: 'semibold',
    fontSize: SIZES.xxLarge * 1.3,
  },
  timerBtnsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.large,
    width: SIZES.width * 0.80,
  },
  timerBtn: (backgroundColor) =>  ({
    backgroundColor: backgroundColor,
    borderRadius: 50,
    paddingVertical: 8,
    width: '35%',
  }),
  timerBtnText: {
    color: COLORS.white,
    fontFamily: 'medium',
    fontSize: SIZES.medium + 2,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default styles;