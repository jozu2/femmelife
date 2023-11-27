import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  dataCardsWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  upcomingWrapper: {},
  wrapperx: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
    paddingTop: SIZES.medium,
    paddingBottom: SIZES.small + 2,
    paddingHorizontal: SIZES.small + 2,
    justifyContent: "center",
    alignItems: "center",
    width: "48.6%",
  },
  rowx: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  datax: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.xLarge * 1.4,
  },
  dataLabelx: {
    color: COLORS.gray,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
});

export default styles;
