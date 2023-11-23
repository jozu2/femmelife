import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  control: {
    flex: 1,
    justifyContent: 'space-between'
  },
  contentWrapper: {
    //
  },
  image: {
    height: SIZES.height * 0.45,
    width: SIZES.width * 0.85,
    resizeMode: 'cover',
    marginTop: SIZES.xxLarge,
    marginLeft: -8,
    marginBottom: -SIZES.small,
  },
  title: {
    color: COLORS.primary,
    fontFamily: "bold",
    fontSize: SIZES.xxLarge + 8,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.large + 3,
    lineHeight: 30,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.medium - 2,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  buttonText: {
    color: COLORS.lightBlack,
    fontFamily: 'semibold',
    fontSize: SIZES.medium + 2,
  },
});

export default styles;
