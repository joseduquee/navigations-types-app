import {FlatList, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParam} from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
  {id: 7, name: 'Product 7'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();
  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Products
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() =>
              navigation.navigate('Product', {id: item.id, name: item.name})
            }
            label={item.name}
          />
        )}
      />

      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Settings
      </Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
