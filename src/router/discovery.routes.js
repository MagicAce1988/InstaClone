import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getMainHeaderOptions, ROUTES} from '../utils/constants';
import DiscoveryScreen from '../screens/DiscoveryScreen';

const DiscoveryStack = createStackNavigator();

const DiscoveryRoutes = () => {
  return (
    <DiscoveryStack.Navigator initialRouteName={ROUTES.EXPLORE}>
      <DiscoveryStack.Screen
        name={ROUTES.EXPLORE}
        component={DiscoveryScreen}
        options={getMainHeaderOptions()}
      />
    </DiscoveryStack.Navigator>
  );
};

export default DiscoveryRoutes;
