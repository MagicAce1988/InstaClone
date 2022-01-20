import {StyleSheet} from 'react-native';
import {DEFAULT_PADDING} from '../../utils/theme';

const style = () => {
  return StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    postSeparator: {
      marginVertical: DEFAULT_PADDING,
    },
  });
};

export default style;
