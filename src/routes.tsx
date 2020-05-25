import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from 'styled-components';
import {Home, Settings} from './screens';
MaterialIcons.loadFont();

const TabNavigator = createBottomTabNavigator();

const TabBar: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <TabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else {
            iconName = 'settings';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.activeIcon,
        inactiveTintColor: theme.inactiveIcon,
        style: {
          backgroundColor: `${theme.backgroundColor}`,
        },
      }}>
      <TabNavigator.Screen component={Home} name="Home" />
      <TabNavigator.Screen component={Settings} name="Settings" />
    </TabNavigator.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
};

export default Routes;
