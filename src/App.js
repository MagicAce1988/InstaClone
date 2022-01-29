import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './router';
import {LogBox, useColorScheme} from 'react-native';
import getTheme from './utils/theme';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const mode = useColorScheme();
  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <NavigationContainer theme={theme}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
