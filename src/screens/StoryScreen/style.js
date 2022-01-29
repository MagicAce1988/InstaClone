import {Platform, StyleSheet} from 'react-native';

const style = theme => {
  const {white} = theme.colors.generalColors;
  const {inputBackground} = theme.colors.screens.storyScreen;

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
