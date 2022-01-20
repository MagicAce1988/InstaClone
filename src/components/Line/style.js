import {StyleSheet} from 'react-native';
import useOwnTheme from '../../utils/theme';

const style = () => {
  const {line} = useOwnTheme().colors.components;

  return StyleSheet.create({
    line: {
      height: 1,
      backgroundColor: line.bg,
    },
  });
};

export default style;
