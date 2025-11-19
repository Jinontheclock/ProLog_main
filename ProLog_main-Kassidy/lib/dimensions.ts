import { Dimensions } from 'react-native';

// Common dimensions for the app
const { width: screenWidth } = Dimensions.get('window');

// Standard phone sizes (min and max widths)
const MIN_PHONE_WIDTH = 320; // iPhone SE width
const MAX_PHONE_WIDTH = 428; // iPhone 13 Pro Max width

// Get constrained width that stays within min and max bounds
export const getConstrainedWidth = () => {
  return Math.min(Math.max(screenWidth, MIN_PHONE_WIDTH), MAX_PHONE_WIDTH);
};

// Common dimensions object
export const dimensions = {
  minWidth: MIN_PHONE_WIDTH,
  maxWidth: MAX_PHONE_WIDTH,
  constrainedWidth: getConstrainedWidth(),
};

export default dimensions;