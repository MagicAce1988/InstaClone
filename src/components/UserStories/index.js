import React from 'react';
import {FlatList, View} from 'react-native';
import UserStory from '../UserStory';
import getUserStories from '../../data/stories';
import getStyles from './style';

const UserStories = () => {
  // variables and state
  const userStories = getUserStories();
  const styles = getStyles();

  return (
    <FlatList
      contentContainerStyle={styles.main}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={userStories}
      keyExtractor={item => item.user.id}
      renderItem={({item}) => (
        <UserStory
          profilePicture={item.user.profilePic}
          name={item.user.name}
          userId={item.user.id}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default UserStories;
