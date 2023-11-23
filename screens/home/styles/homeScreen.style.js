import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles/theme";

const styles = StyleSheet.create({
  sectionTitle: {
    color: COLORS.primaryDarker,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: SIZES.small,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  moods: {
    marginVertical: SIZES.medium,
  },
  mealPlan: {
    //
  },

  // divider row for calorie count and water intake
  sectionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
    padding: SIZES.small,
    width: SIZES.width * 0.444,
    height: SIZES.height * 0.24,
  },
  // total calories section
  calorieTrackerTitle: {
    color: COLORS.secondary,
    fontFamily: "bold",
    fontSize: SIZES.large + 2,
    marginBottom: 8,
  },
  count: { // reused for both the calorie and water section
    color: COLORS.secondary,
    fontFamily: 'bold',
    fontSize: SIZES.xLarge + 5,
  },
  calorieCountLabel: {
    color: COLORS.gray3,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
  },
  totalCountSection: {
    marginLeft: 4,
  },
  totalCountText: {
    color: COLORS.gray3,
    fontWeight: 'semibold',
    fontSize: SIZES.medium,
    lineHeight: 24,
  },
  totalCountTextAccent: {
    fontSize: SIZES.medium + 2,
    fontFamily: 'semibold',
    color: COLORS.secondary,
  },
  // water intake tracker section
  waterImg: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
    marginLeft: -14,
  },
  waterText: {
    color: COLORS.gray3,
    fontWeight: 'semibold',
    fontSize: SIZES.medium,
    lineHeight: 22,
    width: '60%'
  },

});

export default styles;
