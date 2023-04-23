import React from 'react';
import {Button, Card, Text} from '@rneui/base';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/Type';
import {Colors} from '../utils/Config';

type Props = {
  name: String;
  description: String;
  image: ImageSourcePropType;
};

/**
 * 動物情報カード
 */
const AnimalCard = (animal: Props): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'BottomTab'>>();

  return (
    <Card containerStyle={styles.container}>
      <Card.Title>{animal.name}</Card.Title>
      <Card.Image style={{marginBottom: 10}} source={animal.image} />
      <Card.Divider>
        <Text>{animal.description}</Text>
      </Card.Divider>
      <Button
        title="選択"
        titleStyle={{fontSize: 15}}
        containerStyle={{borderRadius: 50}}
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('BottomTab', {name: animal.name});
        }}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    margin: 0,
    marginBottom: 5,
  },
});

export default AnimalCard;
