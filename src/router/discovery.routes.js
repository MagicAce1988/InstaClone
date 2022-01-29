import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {getMainHeaderOptions, ROUTES} from '../utils/constants';
import DiscoveryScreen from '../screens/DiscoveryScreen';

const DiscoveryStack = createStackNavigator();

const DiscoveryRoutes = () => {
  // theme

  const theme = useTheme();

  return (
    <DiscoveryStack.Navigator initialRouteName={ROUTES.EXPLORE}>
      <DiscoveryStack.Screen
        name={ROUTES.EXPLORE}
        component={DiscoveryScreen}
        options={useMemo(() => getMainHeaderOptions(theme), [theme])}
      />
    </DiscoveryStack.Navigator>
  );
};

export default DiscoveryRoutes;
