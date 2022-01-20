import React from 'react';
import {View} from 'react-native';
import getStyles from './style';

const Line = props => {
  // variables
  const styles = getStyles();

  return <View style={[styles.line, props.style]} />;
};

export default Line;
