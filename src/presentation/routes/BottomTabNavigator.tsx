import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {MaterialTopTabsNavigator} from './MaterialTopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        // headerShown: false
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab 1',
          //este color del prop es el activo del tab
          tabBarIcon: props => <IonIcon name='accessibility-outline' color={ props.color }/>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab 2',
          tabBarIcon: props => <IonIcon name='airplane-outline' color={ props.color } />
        }}
        component={MaterialTopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab 3',
          tabBarIcon: props => <IonIcon name='bar-chart-outline' color={ props.color } />
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
