import React from 'react';
import {View} from 'react-native';
import Feed from '../../components/Feed';
import getStyles from './style';

const HomeScreen = () => {
  // variables and state

  const styles = getStyles();

  return (
    <View style={styles.main}>
      <Feed />
    </View>
  );
};

export default HomeScreen;
