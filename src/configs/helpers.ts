import {Platform, Dimensions, PixelRatio} from 'react-native';
import {isTablet} from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

let scale = isTablet() ? 525 : 320;

scale = width / scale;

export function normalize(size: number) {
  const newSize = size * scale;

  if (Platform.OS === 'ios' && !isTablet()) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
