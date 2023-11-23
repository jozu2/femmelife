import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const questionStyles = StyleSheet.create({
  header: {
    marginTop: SIZES.medium,
  },
  layoutControlCenter: {
    flex: 1,
    justifyContent: "center",
  },
  layoutControlFullScreen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  questionWrapper: {
    marginBottom: SIZES.small,
  },
  questionSubtitle: {
    color: COLORS.lightBlack,
    fontFamily: "regular",
    fontSize: SIZES.medium,
    lineHeight: 25,
    marginBottom: 4,
  },
  question: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge,
    marginBottom: SIZES.small,
  },
  nameInput: {
    backgroundColor: '#E6E6E6',
    borderRadius: SIZES.borderRadius,
    paddingVertical: SIZES.medium - 2,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.small,
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
  skipText: {
    color: COLORS.gray,
    marginBottom: SIZES.small,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bmiInputLabel: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  bmiBox: {
    backgroundColor: '#E6E6E6',
    borderRadius: SIZES.borderRadius,
    paddingVertical: SIZES.medium - 2,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '71%'
  },
  bmiValue: {
    color: COLORS.gray,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
  },
  bmiResetBtn: {
    color: COLORS.primaryDarker,
    fontFamily: 'semibold',
  },
  calculateBmiBtn: {
    backgroundColor: COLORS.primaryDarker,
    borderRadius: 50,
    paddingVertical: SIZES.small + 2,
    width: SIZES.width * 0.70,
    marginTop: 4,
    alignSelf: 'center',
  },
  calculateBmiText: {
    color: COLORS.white,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    textAlign: 'center'
  },
});

export default questionStyles;
