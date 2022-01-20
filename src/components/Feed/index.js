import React, {useRef} from 'react';
import {FlatList} from 'react-native';
import UserStories from './../UserStories';
import Post from './../Post';
import Line from './../Line';
import {useScrollToTop} from '@react-navigation/native';
import getFeedPosts from './../../data/feedPosts';
import getStyles from './style';

const Feed = () => {
  // variables and state
  const feedPostsListRef = useRef();
  const posts = getFeedPosts();
  const styles = getStyles();

  // effects

  useScrollToTop(feedPostsListRef);

  return (
    <FlatList
      ref={feedPostsListRef}
      style={styles.scrollContainer}
      data={posts}
      keyExtractor={(_, index) => index}
      renderItem={({item}) => <Post post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<UserStories />}
      ItemSeparatorComponent={() => <Line style={styles.postSeparator} />}
    />
  );
};

export default Feed;
