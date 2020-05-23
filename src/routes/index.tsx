import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRoutes from './home.stack';
import FavoritesRoutes from './favorites.stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from 'styled-components';
import {normalize} from '../../src/configs/helpers';

MaterialIcons.loadFont();

const TabNavigator = createBottomTabNavigator();

const TabBar: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <TabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize = focused ? size + 4 : size;

          if (route.name === 'Home') {
            iconName = 'home';
          } else {
            iconName = 'favorite';
          }

          return (
            <MaterialIcons name={iconName} size={iconSize} color={color} />
          );
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: normalize(14),
        },
        activeTintColor: theme.activeIcon,
        inactiveTintColor: theme.inactiveIcon,
        style: {
          backgroundColor: `${theme.backgroundColor}99`,
        },
      }}>
      <TabNavigator.Screen component={HomeRoutes} name="Home" />
      <TabNavigator.Screen component={FavoritesRoutes} name="Favorites" />
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
