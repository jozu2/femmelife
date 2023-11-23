import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  layoutControl: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 12,
  },
  welcomeText: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.xLarge + 2,
    marginBottom: SIZES.medium,
  },
  screenTitle: {
    color: COLORS.lightBlack,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: 8,
  },
  termsWrapper: {
    marginBottom: SIZES.small,
  },
  termsTitle: {
    color: COLORS.lightBlack,
    fontFamily: "bold",
    fontSize: SIZES.medium + 1,
    marginBottom: 8,
  },
  termsContent: {
    color: COLORS.lightBlack,
    fontFamily: "regular",
    fontSize: SIZES.medium - 1,
    lineHeight: 22.4,
    marginRight: 18,
  },
  checkBoxRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: SIZES.small,
  },
  checkBox: {
    borderColor: COLORS.gray3,
    marginTop: 4,
  },
  button: {
    backgroundColor: COLORS.gray3,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: SIZES.medium - 2,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  buttonEnabled: {
    backgroundColor: COLORS.secondary,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
  },
});

export default styles;
