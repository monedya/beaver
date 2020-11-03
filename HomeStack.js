import * as React from 'react';
import { ScrollView } from 'react-native'
import Box from './src/components/box'
import Button from './src/components/button'
import Text from './src/components/text'


import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Chores from './src/views/Chores'
import Expenses from './src/views/Expenses'
import List from './src/views/List'

import AddExpense from './src/views/AddExpense'
import AddList from './src/views/AddList'
import AddChores from './src/views/AddChores'


import AccountBalanceWallet24Px from './src/components/icons/AccountBalanceWallet24Px'
import AddCircle24Px from './src/components/icons/AddCircle24Px'


function HomePage({ navigation }) {
  return (
    <Box as={ScrollView} bg={'#d6e0f0'} >

      {/* Expenses */}
      <Box m={8} p={8} flex={1} flexDirection={'column'} bg={''} borderRadius={'normal'} shadowColor="black" shadowOpacity="0.2" shadowRadius="8" >
      <Box flexDirection={'row'} alignItems="center">
        <AccountBalanceWallet24Px width={32} height={32} fill="black" />
        <Text ml={16} fontSize={24} mb={2} >Expenses</Text>
      </Box>
      {/* Content Box */}
      <Box as={Button} flex={1} flexDirection={'column'}

        alignItems="flex-start" onPress={() => navigation.navigate('Expenses')}>
        <Box flexDirection={'row'}>
          <Box mt={8} height={2} flex={1} bg={'black'}  >
          </Box>
        </Box>
        <Text mt={8} >data</Text>
        <Text>data</Text>
        <Text>data</Text>
        <Text>data</Text>
      </Box>

      {/* Add Button */}
      <Box alignItems="flex-end">
        <Box as={Button} mt={-24} width={48} height={48} borderRadius='full' onPress={() => navigation.navigate('AddExpense')} >
          <AddCircle24Px width={32} height={32} fill={'black'} />
        </Box>
      </Box>
    </Box>

    {/* Chores */}
    <Box m={8} p={8} flex={1} flexDirection={'column'} bg={''} borderRadius={'normal'} shadowColor="black" shadowOpacity="0.2" shadowRadius="8" >
      <Box flexDirection={'row'} alignItems="center">
        <AccountBalanceWallet24Px width={32} height={32} fill="black" />
        <Text ml={16} fontSize={24} mb={2} >Chores</Text>
      </Box>
      {/* Content Box */}
      <Box as={Button} flex={1} flexDirection={'column'}

        alignItems="flex-start" onPress={() => navigation.navigate('Chores')}>
        <Box flexDirection={'row'}>
          <Box mt={8} height={2} flex={1} bg={'black'}  >
          </Box>
        </Box>
        <Text mt={8} >data</Text>
        <Text>data</Text>
        <Text>data</Text>
        <Text>data</Text>
      </Box>

      {/* Add Button */}
      <Box alignItems="flex-end">
        <Box as={Button} mt={-24} width={48} height={48} borderRadius='full' onPress={() => navigation.navigate('AddChores')} >
          <AddCircle24Px width={32} height={32} fill={'black'} />
        </Box>
      </Box>
    </Box>

    {/* List */}
    <Box m={8} p={8} flex={1} flexDirection={'column'} bg={''} borderRadius={'normal'} shadowColor="black" shadowOpacity="0.2" shadowRadius="8" >
      <Box flexDirection={'row'} alignItems="center">
        <AccountBalanceWallet24Px width={32} height={32} fill="black" />
        <Text ml={16} fontSize={24} mb={2} >Shopping List</Text>
      </Box>
      {/* Content Box */}
      <Box as={Button} flex={1} flexDirection={'column'}

        alignItems="flex-start" onPress={() => navigation.navigate('Chores')}>
        <Box flexDirection={'row'}>
          <Box mt={8} height={2} flex={1} bg={'black'}  >
          </Box>
        </Box>
        <Text mt={8} >data</Text>
        <Text>data</Text>
        <Text>data</Text>
        <Text>data</Text>
      </Box>

      {/* Add Button */}
      <Box alignItems="flex-end" > 
        <Box as={Button} mt={-24} width={48} height={48} borderRadius='full' onPress={() => navigation.navigate('AddList')}  >
          <AddCircle24Px width={32} height={32} fill={'black'} />
        </Box>
      </Box>
    </Box>

    </Box>
  );
}

enableScreens();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomePage}
        options={{
          headerStyle: {
            backgroundColor: '#1f3c88'
          },
          headerTintColor: '#fff',
        }} />
      <Stack.Screen name="Expenses" component={Expenses}
        options={{
          headerStyle: {
            backgroundColor: '#eeeeee'
          }
        }} />
      <Stack.Screen name="Chores" component={Chores} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="AddChores" component={AddChores} />
      <Stack.Screen name="AddList" component={AddList} />
    </Stack.Navigator>

  );
}

export default HomeStack;