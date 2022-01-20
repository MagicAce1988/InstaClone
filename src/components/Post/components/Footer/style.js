import {StyleSheet} from 'react-native';
import useOwnTheme, {DEFAULT_PADDING} from '../../../../utils/theme';

const styles = () => {
  const {colors} = useOwnTheme();

  return StyleSheet.create({
    container: {
      margin: 5,
    },
    iconsContainer: {
      padding: DEFAULT_PADDING / 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconsLeft: {
      width: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    likes: {
      fontWeight: '500',
      margin: 3,
    },
    icon: {
      color: colors.components.post.components.footer.icon,
    },
    redIcon: {
      color: colors.components.post.components.footer.redIcon,
    },
    caption: {
      margin: 3,
    },
    date: {
      color: colors.components.post.components.footer.date,
      margin: 3,
    },
  });
};

export default styles;
