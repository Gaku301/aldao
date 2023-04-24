import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from '@rneui/base';
import AnimalCard from '../components/AnimalCard';
import {Animals} from '../utils/Animal';

const SelectAnimalScreen = (): JSX.Element => {
  const animals = Animals;
  return (
    <ScrollView>
      <View style={{alignItems: 'center', margin: 15}}>
        <Text h4 h4Style={{fontWeight: 'bold'}}>
          遊ぶ動物を選んでください
        </Text>
      </View>
      <View style={styles.cardContainer}>
        {animals.map((animal, index) => {
          return (
            <AnimalCard
              id={animal.id}
              name={animal.name}
              description={animal.description}
              image={animal.image}
              key={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SelectAnimalScreen;
