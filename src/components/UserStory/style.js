import {StyleSheet} from 'react-native';
import {DEFAULT_PADDING} from '../../utils/theme';

const styles = theme => {
  const {story} = theme.colors.components;

  return StyleSheet.create({
    main: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    name: {
      paddingTop: DEFAULT_PADDING / 2,
      fontWeight: '500',
      marginLeft: 8,
      color: story.name,
    },
  });
};

export default styles;
