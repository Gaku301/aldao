import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Text} from '@rneui/base';
import {Toys} from '../utils/Toy';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/Type';

const SelectToyScreen = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'BottomTab'>>();

  return (
    <ScrollView>
      <View style={{alignItems: 'center', margin: 15}}>
        <Text h4 h4Style={{fontWeight: 'bold'}}>
          おもちゃを選んでください
        </Text>
      </View>
      <View style={styles.container}>
        {Toys.map((toy, index) => {
          return (
            <Card key={index} containerStyle={styles.cardContainer}>
              <Card.Title>{toy.name}</Card.Title>
              <Card.Image
                source={toy.image}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
    width: '45%',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SelectToyScreen;
