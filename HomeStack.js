import * as React from 'react';
import{Text,Button,View,SafeAreaView} from 'react-native'

import { enableScreens } from 'react-native-screens';
import {createNativeStackNavigator } from 'react-native-screens/native-stack';

import Chores from './src/views/Chores'
import Expenses from './src/views/Expenses'
import List from './src/views/List'

function HomePage ({navigation}) {
  return (  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Chores"
        onPress={() => navigation.navigate('Chores')}
      />
      <Button
        title="Expenses"
        onPress={() => navigation.navigate('Expenses')}
      />
      <Button
        title="List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
      
  );
}



enableScreens();
const Stack = createNativeStackNavigator();


function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Chores" component={Chores} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="List" component={List} />
    </Stack.Navigator>    
    
  );
}

export default HomeStack;