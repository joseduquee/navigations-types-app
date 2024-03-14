import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({label, onPress}: Props) => {
  
    const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => onPress()}
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{ label }</Text>
    </Pressable>
  );
};
