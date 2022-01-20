import React, {useLayoutEffect} from 'react';
import HomeScreen from '../screens/HomeScreen';
import {getMainHeaderOptions, ROUTES} from '../utils/constants';
import StoryScreen from '../screens/StoryScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeRoutes = ({navigation, route}) => {
  // effects

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    navigation.setOptions({
      tabBarStyle: {display: routeName === ROUTES.STORY ? 'none' : 'flex'},
    });
  }, [navigation, route]);

  return (
    <HomeStack.Navigator initialRouteName={ROUTES.FEED}>
      <HomeStack.Screen
        name={ROUTES.FEED}
        component={HomeScreen}
        options={getMainHeaderOptions()}
      />
      <HomeStack.Screen
        name={ROUTES.STORY}
        component={StoryScreen}
        options={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
