import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import getStyles from './styles';

const ProfilePicture = ({
  profilePictureUri,
  size,
  borderWidth,
  borderColor,
  borderType,
  borderSpacing,
  spacingBorderColor,
}) => {
  // variables and state
  const styles = getStyles({
    size,
    borderWidth,
    borderColor,
    borderType,
    borderSpacing,
    spacingBorderColor,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.spacingContainer}>
        <FastImage style={styles.image} source={{uri: profilePictureUri}} />
      </View>
    </View>
  );
};

export default ProfilePicture;
