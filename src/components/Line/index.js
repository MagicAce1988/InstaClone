import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import getStyles from './style';

const Line = props => {
  // theme
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return <View style={[styles.line, props.style]} />;
};

export default Line;
