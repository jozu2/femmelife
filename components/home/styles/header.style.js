import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  avatarImg: {
    borderRadius: 50,
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
  name: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
  },
  subtitle: {
    color: COLORS.darkGray,
    fontFamily: 'regular',
    fontSize: SIZES.medium - 2,
  },
  dateWrapper: {
    marginTop: SIZES.large,
    marginBottom: SIZES.medium,
  },
  todayTitle: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
  },
  todayDate: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
  },
  dateSubtitle: {
    color: COLORS.lightBlack,
    fontFamily: "regular",
    fontSize: SIZES.medium + 2,
    marginBottom: 4,
  },
  periodInfo: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    width: '100%',
    height: SIZES.height * 0.25,
  },
  periodInfoText: {
    flex: 1,
    marginTop: '12%',
    marginLeft: SIZES.medium,
  },
  periodInfoSubtitle: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
  },
  periodInfoDay: {
    color: COLORS.primaryDarker,
    fontFamily: 'bold',
    fontSize: SIZES.xxLarge,
    marginBottom: 4,
  },
  periodInfoDate: {
    fontFamily: 'semibold',
    fontSize: SIZES.medium + 1,
    color: COLORS.secondary,
  },
  periodInfoImg: {
    borderRadius: SIZES.small,
    position: 'absolute',
    right: 0,
    top: 0,
    height: SIZES.height * 0.25,
    width: 200,
  },
});

export default styles;