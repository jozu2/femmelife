import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8
  },
  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  month: {
    color: COLORS.lightBlack,
    fontFamily: "bold",
    fontSize: SIZES.medium,
    marginBottom: 4,
  },
  periodLength: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    fontSize: SIZES.medium - 1,
  },
  startedDate: {
    color: COLORS.gray,
    fontFamily: "regular",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  status: {
    color: COLORS.lightBlack,
    fontFamily: "medium",
    textTransform: "uppercase",
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray2,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});

export default styles;
