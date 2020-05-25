import React from 'react';
import {Favorites, Settings} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoriteProvider} from '../../src/context/favorites.context';

const FavoritesStack = createStackNavigator();

const headerOptions = {
  headerShown: false,
};

const FavoritesRoutes: React.FC = () => {
  return (
    <FavoriteProvider>
      <FavoritesStack.Navigator>
        <FavoritesStack.Screen
          options={headerOptions}
          component={Favorites}
          name="Favorites"
        />
        <FavoritesStack.Screen
          options={headerOptions}
          component={Settings}
          name="Settings"
        />
      </FavoritesStack.Navigator>
    </FavoriteProvider>
  );
};

export default FavoritesRoutes;
