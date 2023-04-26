import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RootStackParamList, TabParamList} from '../utils/Type';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {getAnimal} from '../utils/Animal';
import {Card, FAB, Text} from '@rneui/base';
import {Colors} from '../utils/Config';
import ActionDialog from '../components/ActionDialog';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

const HomeScreen = ({route}: Props): JSX.Element => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const animal = getAnimal(route.params.id);

  return (
    <>
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

        <ActionDialog
          visible={dialogVisible}
          setVisibleFunc={setDialogVisible}
        />
      </ScrollView>
      <FAB
        visible={true}
        style={styles.fabButton}
        color={Colors.primary}
        // material icon
        icon={{name: 'pets', color: 'white'}}
        onPress={() => setDialogVisible(true)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fabButton: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
});

export default HomeScreen;
