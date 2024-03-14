import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import { type NavigationProp, useNavigation, DrawerActions} from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RootStackParam } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();
  
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     )
  //   })
  // }, []);

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Products</Text>
      </Pressable> */}
      <PrimaryButton 
      label='Products'
      onPress={() => navigation.navigate('Products')}/>
      <PrimaryButton 
      label='Settings'
      onPress={() => navigation.navigate('Settings')}/>
    </View>
  );
};
