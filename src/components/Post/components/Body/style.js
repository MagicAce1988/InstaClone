import {Dimensions, StyleSheet} from 'react-native';
import {DEFAULT_PADDING} from '../../../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    image: {
      height: Dimensions.get('window').width,
      marginTop: DEFAULT_PADDING / 2,
    },
  });
};

export default styles;
