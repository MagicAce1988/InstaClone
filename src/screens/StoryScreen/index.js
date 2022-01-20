import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import getUserStories from '../../data/stories';
import ProfilePicture from './../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import getStyles from './style';
import useOwnTheme from '../../utils/theme';

const StoryScreen = ({navigation, route}) => {
  // state and variables
  const {width} = useWindowDimensions();
  const allUsers = getUserStories();
  const {userId: id} = route.params;
  const [userId, setUserId] = useState(id);
  const {stories = [], user = {}} = getUserStories(userId);
  const [visibleStoryIndex, setVisibleStoryIndex] = useState(0);
  const visibleStory = stories[visibleStoryIndex];
  const isKeyboardOpen = useRef(false);
  const {white} = useOwnTheme().colors.generalColors;
  const {inputPlaceholder} = useOwnTheme().colors.screens.storyScreen;
  const isIOS = Platform.OS === 'ios';

  const styles = getStyles();

  // handlers

  const handlePreviousUserStories = () => {
    const isFirstUser = userId === allUsers[0].user.id;
    if (isFirstUser) {
      navigation.goBack();
    } else {
      const lastUserStoryIndex = getUserStories(userId - 1).stories.length - 1;
      setVisibleStoryIndex(lastUserStoryIndex);
      setUserId(userId - 1);
    }
  };

  const handleNextUserStories = () => {
    const isLastUser = userId === allUsers[allUsers.length - 1].user.id;
    if (isLastUser) {
      return;
    }
    setVisibleStoryIndex(0);
    setUserId(userId + 1);
  };

  const handlePreviousStory = () => {
    const isFirstUserStory = !visibleStoryIndex;
    if (isFirstUserStory) {
      handlePreviousUserStories();
    } else {
      setVisibleStoryIndex(visibleStoryIndex - 1);
    }
  };

  const handleNextStory = () => {
    const isLastUserStory = visibleStoryIndex === stories.length - 1;
    if (isLastUserStory) {
      handleNextUserStories();
    } else {
      setVisibleStoryIndex(visibleStoryIndex + 1);
    }
  };

  const handleImageTouch = event => {
    if (isKeyboardOpen.current) {
      Keyboard.dismiss();
    } else {
      const x = event.nativeEvent.locationX;
      const isRight = x >= width / 2;
      (isRight ? handleNextStory : handlePreviousStory)();
    }
  };

  const handleFocus = () => (isKeyboardOpen.current = true);
  const handleBlur = () => (isKeyboardOpen.current = false);

  const MainContent = () =>
    visibleStory ? (
      <TouchableWithoutFeedback onPressIn={handleImageTouch}>
        <FastImage source={{uri: visibleStory.imageUri}} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture profilePictureUri={user.profilePic} size={60} />
            <View style={styles.userInfoText}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.storyTime}>{visibleStory.postedTime}</Text>
            </View>
          </View>
          <View style={styles.userInput}>
            <Feather name="camera" size={20} color={white} />
            <TextInput
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Send message"
              placeholderTextColor={inputPlaceholder}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              style={styles.input}
            />
            <Ionicons
              name="paper-plane-outline"
              size={20}
              color={white}
              style={styles.sendIcon}
            />
          </View>
        </FastImage>
      </TouchableWithoutFeedback>
    ) : (
      <ActivityIndicator />
    );

  const IOSStory = () => (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView behavior="padding" style={styles.avoidingView}>
        <MainContent />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

  const AndroidStory = () => (
    <KeyboardAvoidingView behavior="height" style={styles.avoidingView}>
      <SafeAreaView style={styles.main}>
        <MainContent />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );

  return isIOS ? <IOSStory /> : <AndroidStory />;
};

export default StoryScreen;
