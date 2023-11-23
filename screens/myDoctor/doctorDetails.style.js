import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles";

const styles = StyleSheet.create({
  section: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    marginTop: SIZES.small,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 1000,
    marginBottom: 8,
    alignSelf: "center",
  },
  name: {
    color: COLORS.lightBlack,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: SIZES.medium,
    textAlign: "center",
  },
  specialty: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.medium + 2,
    marginBottom: 4,
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
    marginBottom: 4,
  },
  details: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  contactDetails: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  consulationSectionTitle: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.medium + 1,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray2,
    marginVertical: 6,
  },
});

export default styles;
