import {StyleSheet} from 'react-native';
import {DEFAULT_PADDING} from '../../utils/theme';

const style = () => {
  return StyleSheet.create({
    main: {
      paddingHorizontal: DEFAULT_PADDING / 2,
      paddingVertical: DEFAULT_PADDING,
    },
    separator: {
      width: DEFAULT_PADDING / 4,
    },
  });
};

export default style;
