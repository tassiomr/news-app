import React from 'react';
import {Home, Settings, Notice} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NoticeProvider} from '../../src/context/noticies.context';

const HomeStack = createStackNavigator();

const headerOptions = {
  headerShown: false,
};

const HomeRoutes: React.FC = () => {
  return (
    <NoticeProvider>
      <HomeStack.Navigator>
        <HomeStack.Screen
          options={headerOptions}
          component={Home}
          name="Home"
        />
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
    </NoticeProvider>
  );
};

export default HomeRoutes;
