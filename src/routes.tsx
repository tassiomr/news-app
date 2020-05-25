import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext, ThemeProvider} from 'styled-components';
import {Home, Settings} from './screens';
import {useAppContext} from './context/app.context';
import theme from './theme';
MaterialIcons.loadFont();

const TabNavigator = createBottomTabNavigator();

const TabBar: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <TabNavigator.Navigator
      // initialRouteName="Settings"
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
  const {theme: Schema} = useAppContext();

  return (
    <ThemeProvider theme={Schema || theme.light}>
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
