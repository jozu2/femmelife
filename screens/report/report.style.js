import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles";

const styles = StyleSheet.create({
  calendar: {
    borderRadius: SIZES.small,
    marginTop: SIZES.small,
    marginBottom: SIZES.large,
  },
  // period info graph
  periodInfo: {
    backgroundColor: COLORS.primaryDarker,
    width: 270,
    height: 270,
    borderRadius: 1000,
    alignSelf: "center",
    alignItems: "center",
  },
  periodInfoTextWrapper: {
    marginTop: "29%",
  },
  periodInfoTitle: {
    color: COLORS.white,
    fontFamily: "medium",
    fontSize: SIZES.medium,
    textAlign: "center",
  },
  periodInfoDays: {
    color: COLORS.white,
    fontFamily: "bold",
    fontSize: SIZES.xxLarge,
    marginBottom: SIZES.medium,
    textAlign: "center",
  },
  periodEditBtn: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: SIZES.small,
  },
  periodEditBtnText: {
    color: COLORS.primaryDarker,
    fontFamily: "medium",
    fontSize: SIZES.small,
  },
});

export default styles;
