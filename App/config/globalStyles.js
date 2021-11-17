import {Dimensions} from 'react-native';

export const colors = {
  primary: '#8CB3FF',
  black: '#191919',
  white: '#ffffff',

  lightBlue: '#8ED7E1',
  lightGreen: '#6FF1CE',

  textGrey: '#5F6768',

  darkGrey: '#7D7D7D',
  lightGrey: '#EEEEEE',
};

export const storyBoardDimensions = {
  height: 835,
  width: 397,
};

export const fontSizes = {
  appTitle: 48,
  title: 36,

  xl: 24,
  lg: 22,
  md: 18,

  sm: 16,
  xs: 12,

  textInput: Dimensions.get('screen').height <= 650 ? 16 : 20,
};

export const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700',
  extraBold: '800',
};

export const images = {
  hello: require('../assets/waving-hand.png'),
  puzzle: require('../assets/puzzle.png'),
};

export const height = (
  Dimensions.get('screen').height *
  (1 / storyBoardDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get('screen').width *
  (1 / storyBoardDimensions.width)
).toFixed(2);
