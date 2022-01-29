import {StyleSheet} from 'react-native';

const style = theme => {
  const {line} = theme.colors.components;

  return StyleSheet.create({
    line: {
      height: 1,
      backgroundColor: line.bg,
    },
  });
};

export default style;
