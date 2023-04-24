import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog} from '@rneui/base';
import {Colors} from '../utils/Config';

type Props = {
  visible: boolean;
  setVisibleFunc: (visible: boolean) => void;
};

/**
 * FABボタン押下時のアクションダイアログ
 */
const ActionDialog = (props: Props): JSX.Element => {
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
      />
      <Button
        title={'おやつ'}
        style={{margin: 10}}
        titleStyle={{fontWeight: 'bold'}}
        color={Colors.primary}
      />
      <Button
        title={'活動'}
        style={{margin: 10}}
        color={Colors.primary}
        titleStyle={{fontWeight: 'bold'}}
      />
    </Dialog>
  );
};

const styles = StyleSheet.create({
  dialogOverlay: {
    backgroundColor: 'white',
    opacity: 0.9,
    minHeight: 350,
    justifyContent: 'space-evenly',
  },
});

export default ActionDialog;
