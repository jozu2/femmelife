import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles/theme";

const styles = StyleSheet.create({
  image: {
    width: SIZES.width * 0.7,
    height: SIZES.height * 0.3,
    resizeMode: "cover",
    alignSelf: "center",
    marginBottom: SIZES.small,
  },
  title: {
    color: COLORS.secondary,
    fontFamily: "semibold",
    fontSize: SIZES.xLarge,
    textAlign: "center",
    marginBottom: SIZES.large,
  },
  inputBox: {
    backgroundColor: "#E6E6E6",
    borderRadius: SIZES.borderRadius,
    paddingVertical: SIZES.medium - 2,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.small,
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
  forgotPasswordBtn: {
    color: COLORS.secondary,
    fontFamily: "regular",
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    paddingVertical: SIZES.small + 2,
    marginTop: SIZES.small,
  },
  loginButtonText: {
    color: COLORS.white,
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
    textAlign: "center",
  },
  registerAccountBtn: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    textAlign: "center",
    marginBottom: SIZES.medium,
  },
  registerAccountBtnAccent: {
    color: COLORS.secondary,
    fontFamily: "medium",
  },
  socialLoginTitle: {
    color: COLORS.lightBlack,
    fontFamily: "regular",
    textAlign: "center",
    marginVertical: SIZES.small,
  },
  socialLogin: {
    marginBottom: SIZES.medium,
  },
  socialLoginBtn: {
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: SIZES.medium - 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: SIZES.small,
  },
  socialLoginBtnText: {
    color: COLORS.lightBlack,
    fontFamily: "semibold",
    fontSize: SIZES.medium + 1,
  },
  googleIcon: {
    height: 25,
    width: 25,
  },
});

export default styles;
