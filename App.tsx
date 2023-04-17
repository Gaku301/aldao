import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from './src/screens/StartScreen';
import {RootStackParamList} from './src/utils/Type';
import BottomTab from './src/components/BottomTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: true}} // TODO: リリース時はfalseに
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
