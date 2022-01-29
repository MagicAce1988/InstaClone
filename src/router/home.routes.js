import React, {useLayoutEffect, useMemo} from 'react';
import {getFocusedRouteNameFromRoute, useTheme} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {getMainHeaderOptions, ROUTES} from '../utils/constants';
import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = ({navigation, route}) => {
  // theme

  const theme = useTheme();

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
        options={useMemo(() => getMainHeaderOptions(theme), [theme])}
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
