import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Left from './src/views/LeftNav'
import HomeStack from './HomeStack.js'
import Right from './src/views/Right'
import { NavigationContainer } from '@react-navigation/native';




const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Left" component={Left} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Right" component={Right} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;