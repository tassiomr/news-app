import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRoutes from './home.stack';
import FavoritesRoutes from './favorites.stack';

const TabNavigator = createBottomTabNavigator();

const TabBar: React.FC = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen component={HomeRoutes} name="App" />
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
