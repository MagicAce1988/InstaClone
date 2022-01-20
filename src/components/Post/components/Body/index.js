import React from 'react';
import FastImage from 'react-native-fast-image';
import getStyles from './style';

const Body = ({image}) => {
  // variables and state
  const styles = getStyles();

  return <FastImage source={{uri: image}} style={styles.image} />;
};

export default Body;
