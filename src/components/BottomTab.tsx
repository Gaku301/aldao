import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import IonIcon from './IonIcon';
import {Colors} from '../utils/Config';

type RouteProps = {
  name?: String;
  params?: any;
};

const Tab = createBottomTabNavigator();

const BottomTab = (): JSX.Element => {
  const getIconName = (route: RouteProps, focused: Boolean) => {
    let iconName = '';
    if (route?.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'settings-sharp' : 'settings-outline';
    }
    return iconName;
  };

  return (
    // タブのルーティングは以下に追加
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = getIconName(route, focused);
          return <IonIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
