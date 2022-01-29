import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../../ProfilePicture';
import getStyles from './style';

const Header = ({profilePicture, name}) => {
  // theme
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

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
