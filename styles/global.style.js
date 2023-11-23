import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "./theme";

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  wrapper: {
    marginHorizontal: SIZES.medium,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: SIZES.small,
  },
  label: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: SIZES.small,
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
  },
});

export default STYLES;
