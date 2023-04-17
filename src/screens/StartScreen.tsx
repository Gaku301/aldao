import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/Type';
import {useNavigation} from '@react-navigation/native';

const StartScreen = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'BottomTab'>>();

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View>
        <Text>StartScreen</Text>
        <Button
          title="Start"
          onPress={() => {
            navigation.navigate('BottomTab');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
