import React from 'react';
import {ScrollView} from 'react-native';
import {RootStackParamList, TabParamList} from '../utils/Type';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {getAnimal} from '../utils/Animal';
import {Card, Text} from '@rneui/base';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

const HomeScreen = ({route}: Props): JSX.Element => {
  const animal = getAnimal(route.params.id);
  return (
    <ScrollView>
      <Card>
        <Card.Title>{animal.name}</Card.Title>
        <Card.Image
          source={animal.image}
          style={{height: 500, marginBottom: 10}}
        />
        <Card.Divider>
          <Text>{animal.description}</Text>
        </Card.Divider>
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;
