import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: SIZES.xSmall,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 1000,
    marginBottom: 8,
    alignSelf: "center",
  },
  detailsSection: {
    //
  },
  name: {
    color: COLORS.lightBlack,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    textAlign: "center",
    marginBottom: 2,
  },
  id: {
    color: COLORS.gray,
    fontFamily: "medium",
    fontSize: SIZES.medium - 1,
    textAlign: "center",
    marginBottom: SIZES.medium,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  detailsTitle: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.medium + 2,
    marginBottom: 8,
  },
  details: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium - 1,
    marginBottom: 6,
  },
  //
  contactDetails: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium - 1,
    marginBottom: 4,
  },
  editButton: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    paddingVertical: 6,
    paddingHorizontal: 8,
    right: 12,
    top: 14,
    gap: 4,
  },
  editButtonText: {
    color: COLORS.secondary,
    fontFamily: "semibold",
  },
});

export default styles;
