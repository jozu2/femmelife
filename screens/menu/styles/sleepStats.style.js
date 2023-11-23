import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  title: {
    marginVertical: SIZES.small,
  },
  idealSleepCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idealSleepTitle: {
    color: COLORS.darkGray,
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  idealSleepHrs: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
  },
  learnMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 4,
  },
  learnMoreBtnTxt: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontFamily: 'medium'
  },
  learnMoreChevron: {
    marginTop: 3,
  },
  learnMoreImg: {
    width: 130,
    height: SIZES.height * 0.065,
    position: 'absolute',
    bottom: SIZES.medium,
    right: SIZES.xSmall,
  }

});

export default styles;
