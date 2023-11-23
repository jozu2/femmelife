import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  greeting: {
    color: COLORS.secondary,
    fontFamily: "semibold",
    fontSize: SIZES.xLarge + 4,
    marginTop: SIZES.small,
  },
  recommendation: {
    color: COLORS.gray,
    fontFamily: 'regular',
    fontSize: SIZES.medium + 1,
    marginBottom: SIZES.medium,
  },
  quoteCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small,
    alignItems: 'center',
  },
  quoteText: {
    flex: 1, // instead of using a fixed width, add this to wrap text.
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.large + 2,
    lineHeight: 30,
    marginLeft: 8,
  },
  quoteImg: {
    height: 120,
    width: 120,
    resizeMode: 'cover'
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.medium,
  },
  suggestionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    alignItems: 'center',
    width: SIZES.width * 0.40,
  },
  suggestionImg: {
    height: 120,
    width: 120,
    marginBottom: 8,
  },
  suggestionName: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    textAlign: 'center'
  },

  goalTodayCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalTitle: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.medium + 2,
  }, 
  goalDesc: {
    color: COLORS.gray,
    fontFamily: 'regular'
  },
  goalImg: {
    height: 40,
    width: 35,
    resizeMode: 'contain'
  },
  // breathing animation
  animationWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingTop: SIZES.small,
  },
  instructions: {
    paddingHorizontal: SIZES.small + 2,
  },
  intructionsText: {
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    lineHeight: 25.6,
  },
  startButton: (backgroundColor) =>  ({
    backgroundColor: backgroundColor,
    borderRadius: 1000,
    paddingVertical: 8,
    width: '30%',
    marginVertical: SIZES.medium,
    alignSelf: 'center'
  }),
  startButtonText: {
    color: COLORS.white,
    fontFamily: 'medium',
    fontSize: SIZES.medium + 2,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  animation: {
    height: SIZES.height * 0.315,
    width: '100%',
    alignSelf: 'center',
  },
});

export default styles;
