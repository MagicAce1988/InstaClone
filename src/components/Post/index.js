import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({
  post: {
    user: {name, profilePicture},
    content: {image, caption},
    likesCount,
    date,
  },
}) => {
  return (
    <View>
      <Header profilePicture={profilePicture} name={name} />
      <Body image={image} />
      <Footer likesCount={likesCount} caption={caption} date={date} />
    </View>
  );
};

export default Post;
