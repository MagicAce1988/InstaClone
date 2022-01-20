import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from './../../utils/constants';
import ProfilePicture from '../ProfilePicture';
import getStyles from './style';

const UserStory = ({profilePicture, name, userId}) => {
  // variables and state

  const styles = getStyles();
  const navigation = useNavigation();

  // handlers

  const onPress = () => navigation.navigate(ROUTES.STORY, {userId});

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <ProfilePicture profilePictureUri={profilePicture} size={60} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStory;
