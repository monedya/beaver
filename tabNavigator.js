import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components'

import TabBar from './src/components/tabBar.js'
import Box from './src/components/box'

import Left from './src/views/LeftNav'
import HomeStack from './HomeStack.js'
import Right from './src/views/Right'
import theme from './src/utils/theme'

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}    >
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBar={props => <TabBar {...props} />}  >
            <Tab.Screen name="Left" component={Left} />
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Right" component={Right} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>

  );
}

export default TabNavigator