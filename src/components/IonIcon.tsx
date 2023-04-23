import React from 'react';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

type IconProps = {
  name?: String; // icon name
  size: Number; // icon size
  color: String; // icon color
};

/**
 * IonIconのアイコンエレメント
 * https://ionic.io/ionicons
 */
const IonIcon = ({name, size, color}: IconProps): JSX.Element => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default IonIcon;
