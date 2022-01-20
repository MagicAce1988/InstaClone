import {Platform, StyleSheet} from 'react-native';
import useOwnTheme from '../../utils/theme';

const style = () => {
  const {white} = useOwnTheme().colors.generalColors;
  const {inputBackground} = useOwnTheme().colors.screens.storyScreen;

  return StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avoidingView: {
      flex: 1,
      width: '100%',
      paddingBottom: Platform.OS === 'android' ? 16 : 0,
    },
    image: {
      flex: 1,
      width: '100%',
      justifyContent: 'space-between',
      padding: 16,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userInfoText: {
      marginLeft: 10,
      height: 40,
      justifyContent: 'space-between',
    },
    userName: {
      color: white,
      fontWeight: '500',
      fontSize: 18,
    },
    storyTime: {
      color: white,
      fontWeight: '400',
      fontSize: 14,
    },
    userInput: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      backgroundColor: inputBackground,
      marginHorizontal: 8,
      flex: 1,
      height: 30,
      borderWidth: 1,
      borderColor: white,
      borderRadius: 5,
      color: white,
      paddingVertical: 0,
      paddingHorizontal: 10,
    },
    sendIcon: {
      marginBottom: 2,
    },
  });
};

export default style;
