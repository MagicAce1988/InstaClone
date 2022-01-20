import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../../ProfilePicture';
import getStyles from './style';

const Header = ({profilePicture, name}) => {
  // variables and state

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <ProfilePicture profilePictureUri={profilePicture} size={40} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="dots-three-vertical" size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
