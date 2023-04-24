export const Animals = [
  {
    id: 1,
    name: '犬1',
    description: 'これは犬',
    image: require('../assets/dog.png'),
  },
  {
    id: 2,
    name: '犬2',
    description: 'これは犬2のせつめい',
    image: require('../assets/dog.png'),
  },
  {
    id: 3,
    name: '犬3',
    description: 'せつめい',
    image: require('../assets/dog.png'),
  },
  {
    id: 4,
    name: '猫1',
    description: '猫のせつめい',
    image: require('../assets/cat.png'),
  },
  {
    id: 5,
    name: '猫2',
    description: '猫せつめい',
    image: require('../assets/cat.png'),
  },
  {
    id: 6,
    name: '猫3',
    description: '猫3だ',
    image: require('../assets/cat.png'),
  },
];

/**
 * Animalデータを取得する
 * @param {number} id
 * @returns {Object}
 */
export const getAnimal = (id: number) => {
  return Animals.filter(animal => animal.id === id)[0];
};
