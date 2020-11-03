import React,{useState} from 'react'
import detailedChores from './detailedChores'
import { createStackNavigator } from '@react-navigation/stack';
import {ScrollView} from 'react-native'
import Box from '../components/box'
import Text from '../components/text'
import ChoreBox from '../components/choreBox'
import Button from '../components/button'

const ListScreen = ({navigation})=>{

   
return (
  <Box as={ScrollView} flex={1}>
      <ChoreBox/>
      <ChoreBox/>
      <ChoreBox/>
      <Box as={Button} bg={'#00CBFF'} ml={20} mr={20} 
      flexDirection={'row'} height={48} borderRadius={12} mt={35}
      //onPress={navigation.navigate('Details')}
      >
        <Text color={'white'} fontSize={22} >Add Chores</Text>
      </Box>
   </Box>
)}
            
const Stack = createStackNavigator();

const choresNavigation=()=> {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen name="Chores" component={ListScreen} />
          <Stack.Screen name="Details" component={detailedChores} />
        </Stack.Navigator>

    );
  }

export default choresNavigation
