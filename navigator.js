import * as React from 'react';
import{Text,SafeAreaView} from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Left from './src/views/LeftNav'
import HomeStack from './HomeStack.js'
import Right from './src/views/Right'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function MainNavigator() {
  return (
      <NavigationContainer>
          <Tab.Navigator
          initialRouteName="Home">
      <Tab.Screen name="Left" component={Left} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Right" component={Right} />
    </Tab.Navigator>
      </NavigationContainer>
    
  );
}

export default MainNavigator