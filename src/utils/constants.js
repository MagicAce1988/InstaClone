import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import getGeneralStyle from './../utils/generalStyles';

export const INSTAGRAM_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png';

export const getMainHeaderOptions = theme => {
  // theme

  const {black} = theme.colors.generalColors;
  const style = getGeneralStyle();

  return {
    headerLeft: () => (
      <Feather
        name="camera"
        size={20}
        color={black}
        style={style.headerLeftIcon}
      />
    ),
    headerTitle: () => (
      <FastImage
        source={{uri: INSTAGRAM_LOGO}}
        style={style.headerInstagramLogo}
      />
    ),
    headerTitleAlign: 'center',
    headerRight: () => (
      <Ionicons
        name="paper-plane-outline"
        size={20}
        color={black}
        style={style.headerRightIcon}
      />
    ),
  };
};

export const ROUTES = {
  FEED: 'Feed',
  EXPLORE: 'Explore',
  STORY: 'Story',
};
