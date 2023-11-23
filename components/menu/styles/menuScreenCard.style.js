import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    width: '100%',
    height: SIZES.height * 0.10,
    justifyContent: 'center',
    marginBottom: SIZES.medium,
  },
  label: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.large + 2,
    marginLeft: SIZES.medium,
  },
  image: {
    width: 110,
    height: SIZES.height * 0.10,
    position: 'absolute',
    right: 0,
  },
});

export default styles;
