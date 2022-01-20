import {StyleSheet} from 'react-native';

const getGeneralStyles = () => {
  return StyleSheet.create({
    headerInstagramLogo: {
      width: 100,
      height: 30,
    },
    headerRightIcon: {
      marginRight: 10,
    },
    headerLeftIcon: {
      marginLeft: 10,
    },
  });
};

export default getGeneralStyles;
