import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#FFB6C1",
  primaryDarker: "#F77FAA",
  secondary: "#4682B4",
  tertiary: "#E6E6FA",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#ADADAD",
  darkGray: "#757575",
  lightGray: "#9D9FA3",
  lightGray2: "#F2F2F2",
  lightGray3: "#EDEDED",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  lightRed: "#EF5350",
  green: "#00C135",
  green2: "#05a95c",
  yellow: "#F7BB07",
  lightWhite: "#FAFAFC",
  lightBlack: "#333333",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
  borderRadius: 10,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
