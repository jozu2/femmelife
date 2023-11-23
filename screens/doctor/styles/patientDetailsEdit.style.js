import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "column",
    justifyContent: "center",
  },
  wrapper: {
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  title: {
    color: COLORS.lightBlack,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: SIZES.small,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 12,
  },
  categoryTitle: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.medium + 2,
    marginBottom: 8,
  },
  inputLabel: {
    color: COLORS.secondary,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    marginBottom: 4,

  },
  input: {
    backgroundColor: COLORS.lightGray3,
    borderRadius: SIZES.borderRadius,
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    paddingVertical: 12,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.small,
  },
  submitButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    paddingVertical: SIZES.small,
    marginTop: SIZES.small,
  },
  submitButtonText: {
    color: COLORS.white,
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
    textAlign: "center",
  },
});

export default styles;
