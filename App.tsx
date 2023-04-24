import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from './src/screens/StartScreen';
import {RootStackParamList} from './src/utils/Type';
import BottomTab from './src/components/BottomTab';
import SelectAnimalScreen from './src/screens/SelectAnimalScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    // スクリーンのルーテイングは以下に追加
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectAnimalScreen"
          component={SelectAnimalScreen}
          options={{
            // TODO: リリース時はfalseに
            headerBackVisible: true,
            gestureEnabled: false, // スワイプバックを不可とする
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            // TODO: リリース時はheaderShownをfalseに
            headerShown: true,
            gestureEnabled: false, // スワイプバックを不可とする
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
