import React,{useState} from 'react'
import {View,StyleSheet,Button,FlatList,TouchableOpacity,Image} from 'react-native'
import detailedChores from './detailedChores'
import { createStackNavigator } from '@react-navigation/stack';
import {ScrollView} from 'react-native'
import Box from '../components/box'
import ExpenseBox from '../components/expensebox'
import Text from '../components/text'
import ChoreList from '../components/choreList'

const ListScreen = ({navigation})=>{

   
return (
      <ChoreList/>
)}
            
const Stack = createStackNavigator();

/*const choresNavigation=()=> {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen name="Chores" component={ListScreen} />
          <Stack.Screen name="Details" component={detailedChores} />
        </Stack.Navigator>

    );
  }
*/
export default ListScreen
