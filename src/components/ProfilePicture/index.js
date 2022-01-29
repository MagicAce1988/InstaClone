import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import getStyles from './styles';

const ProfilePicture = ({profilePictureUri, ...props}) => {
  // theme
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme, props), [props, theme]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.spacingContainer}>
        <FastImage style={styles.image} source={{uri: profilePictureUri}} />
      </View>
    </View>
  );
};

export default ProfilePicture;
