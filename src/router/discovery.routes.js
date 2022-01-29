import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getMainHeaderOptions, ROUTES} from '../utils/constants';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import {useTheme} from '@react-navigation/native';

const DiscoveryStack = createStackNavigator();

const DiscoveryRoutes = () => {
  // theme

  const theme = useTheme();

  return (
    <DiscoveryStack.Navigator initialRouteName={ROUTES.EXPLORE}>
      <DiscoveryStack.Screen
        name={ROUTES.EXPLORE}
        component={DiscoveryScreen}
        options={getMainHeaderOptions(theme)}
      />
    </DiscoveryStack.Navigator>
  );
};

export default DiscoveryRoutes;
