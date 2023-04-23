import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {RootTabParamList} from '../utils/Type';

type Props = NativeStackScreenProps<RootTabParamList, 'Home'>;

const HomeScreen = ({route}: Props): JSX.Element => {
  console.log(route);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
