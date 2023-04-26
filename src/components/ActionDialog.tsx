import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog} from '@rneui/base';
import {Colors} from '../utils/Config';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/Type';

type Props = {
  visible: boolean;
  setVisibleFunc: (visible: boolean) => void;
};

/**
 * FABボタン押下時のアクションダイアログ
 */
const ActionDialog = (props: Props): JSX.Element => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        RootStackParamList,
        'SelectToyScreen',
        'SelectFoodScreen'
      >
    >();
  return (
    <Dialog
      isVisible={props.visible}
      onBackdropPress={() => props.setVisibleFunc(false)}
      overlayStyle={styles.dialogOverlay}>
      <Button
        title={'おもちゃ'}
        style={{margin: 10}}
        titleStyle={{fontWeight: 'bold'}}
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('SelectToyScreen');
          props.setVisibleFunc(false);
        }}
      />
      <Button
        title={'おやつ'}
        style={{margin: 10}}
        titleStyle={{fontWeight: 'bold'}}
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('SelectFoodScreen');
          props.setVisibleFunc(false);
        }}
      />
      <Button
        title={'活動'}
        style={{margin: 10}}
        color={Colors.primary}
        titleStyle={{fontWeight: 'bold'}}
        onPress={() => {
          props.setVisibleFunc(false);
        }}
      />
      <Button
        title={'他の動物と遊ぶ'}
        style={{margin: 10}}
        type="clear"
        icon={{name: 'chevron-left', color: Colors.primary}}
        titleStyle={{fontWeight: 'bold', color: Colors.primary}}
        onPress={() => {
          navigation.goBack();
          props.setVisibleFunc(false);
        }}
      />
    </Dialog>
  );
};

const styles = StyleSheet.create({
  dialogOverlay: {
    backgroundColor: 'white',
    opacity: 0.9,
    minHeight: 350,
    width: '80%',
    justifyContent: 'space-evenly',
  },
  dialog2Overlay: {
    backgroundColor: 'white',
    opacity: 0.9,
    minHeight: 350,
    maxHeight: 500,
    width: '80%',
    alignItems: 'center',
  },
});

export default ActionDialog;
