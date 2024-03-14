import {Text, View} from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  
  const navigation = useNavigation();
  
  return (
    <View style={ globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>
      <PrimaryButton 
        label='Back'
        onPress={() => navigation.goBack()}
      />
      {/* regresar al home */}
      <PrimaryButton 
        label='Back to Home'
        onPress={() => navigation.dispatch( StackActions.popToTop )}
      />
    </View>
  );
};
