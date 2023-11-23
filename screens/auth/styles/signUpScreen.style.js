import { StyleSheet } from "react-native";
import STYLES from "../../../styles/global.style";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: SIZES.width * 0.7,
    height: SIZES.height * 0.3,
    resizeMode: "cover",
    alignSelf: "center",
    marginVertical: SIZES.small,
  },
  title: {
    color: COLORS.secondary,
    fontFamily: "semibold",
    fontSize: SIZES.xLarge,
    textAlign: "center",
  },
  inputFieldWrapper: {
    marginTop: SIZES.large,
    marginBottom: SIZES.small,
  },
  inputFieldGroup: {
    marginBottom: SIZES.small,
  },
  inputFieldErrorMessage: {
    color: COLORS.lightRed,
    fontFamily: "regular",
    fontSize: SIZES.small,
    marginBottom: 4,
  },
  inputField: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.borderRadius,
    paddingVertical: SIZES.small + 2,
    paddingHorizontal: SIZES.medium,
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
  signUpBtn: {
    backgroundColor: COLORS.gray3,
    borderRadius: 50,
    paddingVertical: SIZES.small + 2,
    marginTop: SIZES.small,
  },
  signUpBtnEnabled: {
    backgroundColor: COLORS.secondary,
  },
  signUpBtnText: {
    color: COLORS.white,
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
    textAlign: "center",
  },
  checkBoxRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: SIZES.small,
  },
  checkBox: {
    borderColor: COLORS.gray2,
    marginTop: 4,
  },
  termsText: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium - 2,
    lineHeight: 22.4,
    flex: 1,
  },
});

export default styles;
