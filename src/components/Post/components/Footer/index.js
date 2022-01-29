import React, {useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import millify from 'millify';
import getStyles from './style';

const Footer = ({likesCount, caption, date}) => {
  // theme

  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  // variables and state

  const [likesNumber, setLikesNumber] = useState(likesCount);
  const [likedByCurrentUser, setLikedByCurrentUser] = useState(false);

  const leftIcons = [
    <AntDesign
      name={likedByCurrentUser ? 'heart' : 'hearto'}
      size={25}
      style={likedByCurrentUser ? styles.redIcon : styles.icon}
    />,
    <Fontisto name="comment" size={23} style={styles.icon} />,
    <Ionicon name="paper-plane-outline" size={25} style={styles.icon} />,
  ];

  // handlers

  const handleLike = () => {
    setLikesNumber(likes => likes + (likedByCurrentUser ? -1 : 1));
    setLikedByCurrentUser(liked => !liked);
  };

  // dependent variables

  const leftIconsHandlers = [handleLike];

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.iconsLeft}>
          {leftIcons.map((icon, index) => (
            <TouchableOpacity key={index} onPress={leftIconsHandlers[index]}>
              {icon}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity>
          <FontAwesome name="bookmark-o" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.likes}>{millify(likesNumber)} likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default Footer;
