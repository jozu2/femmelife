import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  layoutControl: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: SIZES.height * 0.35,
    width: SIZES.width * 0.75,
    resizeMode: "cover",
    alignSelf: 'center',
    marginTop: SIZES.xxLarge,
  },
  textWrapper: {
    marginTop: SIZES.xxLarge,
  },
  title: {
    fontFamily: 'semibold',
    fontSize: SIZES.xLarge + 4,
    marginBottom: SIZES.small,
  },
  subtitle: {
    color: COLORS.gray,
    fontFamily: 'regular',
    fontSize: SIZES.medium + 1,
    lineHeight: 25,
  },
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: SIZES.medium - 2,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: 'semibold',
    fontSize: SIZES.medium + 2,
  },
});

export default styles;
