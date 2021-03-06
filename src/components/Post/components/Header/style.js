import {StyleSheet} from 'react-native';
import useOwnTheme, {DEFAULT_PADDING} from '../../../../utils/theme';

const styles = () => {
  const {post} = useOwnTheme().colors.components;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: DEFAULT_PADDING / 2,
    },
    leftSide: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontWeight: '500',
      marginLeft: 8,
      color: post.components.header.text,
    },
  });
};

export default styles;
