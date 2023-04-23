import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import {RootStackParamList} from '../utils/Type';
import {Colors} from '../utils/Config';

const StartScreen = (): JSX.Element => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'SelectAnimalScreen'>
    >();

  return (
    <SafeAreaView style={styles.contentCenter}>
      <View>
        <Text>StartScreen</Text>
        <Button
          title="Start"
          containerStyle={{borderRadius: 50}}
          color={Colors.primary}
          onPress={() => {
            navigation.navigate('SelectAnimalScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default StartScreen;
