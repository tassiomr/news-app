import React from 'react';
import {Favorites, Settings, Notice} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const FavoritesStack = createStackNavigator();

const headerOptions = {
  headerShown: false,
};

const FavoritesRoutes: React.FC = () => {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        options={headerOptions}
        component={Favorites}
        name="Favorites"
      />
      <FavoritesStack.Screen
        options={headerOptions}
        component={Notice}
        name="Notice"
      />
      <FavoritesStack.Screen
        options={headerOptions}
        component={Settings}
        name="Settings"
      />
    </FavoritesStack.Navigator>
  );
};

export default FavoritesRoutes;
