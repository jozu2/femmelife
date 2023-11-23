import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles/theme";

const styles = StyleSheet.create({
  header: {
    marginTop: SIZES.small,
    marginBottom: SIZES.xLarge,
    flexDirection: "row",
    gap: SIZES.large,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    borderRadius: SIZES.small,
  },
  userImage: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  userInfoRow: {
    //
  },
  name: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: 4,
  },
  email: {
    color: COLORS.darkGray,
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
  editBtn: {
    position: "absolute",
    right: 12,
    top: 14,
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium + 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: SIZES.small,
  },
  sectionLabel: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  signOutText: {
    color: COLORS.lightRed,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
});

export default styles;
