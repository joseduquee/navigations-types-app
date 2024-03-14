import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { RootStackParam } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';

export const ProductScreen = () => {
  
  const params = useRoute<RouteProp<RootStackParam, 'Product'>>().params;
  const navigation = useNavigation();

  //de esta forma paso el nombre de la ruta o parametro al titulo del header
  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])
  
  return (
    <View style={ globalStyles.container }>
      <Text>Product Screen</Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }}>
        {params.id} - { params.name}
      </Text>
    </View>
  );
};
