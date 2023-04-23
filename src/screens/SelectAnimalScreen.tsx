import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from '@rneui/base';
import AnimalCard from '../components/AnimalCard';

const SelectAnimalScreen = (): JSX.Element => {
  const animals = [
    {name: '犬1', description: 'これは犬', image: require('../assets/dog.png')},
    {
      name: '犬2',
      description: 'これは犬2のせつめい',
      image: require('../assets/dog.png'),
    },
    {name: '犬3', description: 'せつめい', image: require('../assets/dog.png')},
    {
      name: '猫1',
      description: '猫のせつめい',
      image: require('../assets/cat.png'),
    },
    {
      name: '猫2',
      description: '猫せつめい',
      image: require('../assets/cat.png'),
    },
    {name: '猫3', description: '猫3だ', image: require('../assets/cat.png')},
  ];
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
