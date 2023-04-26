import {NavigatorScreenParams} from '@react-navigation/native';

/**
 * Screenのルーティング type
 */
export type RootStackParamList = {
  StartScreen: undefined;
  SelectAnimalScreen: undefined;
  BottomTab: NavigatorScreenParams<TabParamList>;
  SelectToyScreen: undefined;
  SelectFoodScreen: undefined;
};

/**
 * Tabのルーティング type
 */
export type TabParamList = {
  Home: {id: number};
  Setting: undefined;
};
