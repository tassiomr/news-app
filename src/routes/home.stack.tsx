import React from 'react';
import {Home, Settings, Notice} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const headerOptions = {
  headerShown: false,
};

const HomeRoutes: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={headerOptions} component={Home} name="Home" />
      <HomeStack.Screen
        options={headerOptions}
        component={Notice}
        name="Notice"
      />
      <HomeStack.Screen
        options={headerOptions}
        component={Settings}
        name="Settings"
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
