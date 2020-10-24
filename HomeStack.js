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

import AddShoppingCart from './src/components/icons/AddShoppingCart'
import AddTask from './src/components/icons/AddTask'
import Receipt from './src/components/icons/Receipt'
import AddCircle24Px from './src/components/icons/AddCircle24Px'

function HomePage({ navigation }) {
  return (
    <Box as={ScrollView} >

      {/* Expenses Chart */}

      <Box p={8} flex={1} flexDirection={'column'} bg="">

        {/* Content Box */}
        <Box as={Button} flex={1} flexDirection={'column'} bg=""

          alignItems="flex-start" onPress={() => navigation.navigate('Expenses')}>
          <Text>Esad</Text>
          <Text>Esad</Text>
          <Text>Esad</Text>
          <Text>Esad</Text>
          <Text>Esad</Text>
        </Box>

        {/* Add Button */}
        <Box alignItems="flex-end">
          <Box as={Button} mt={-24} width={48} height={48} bg={''} borderRadius='full'  >
            <AddCircle24Px width={32} height={32} fill={'black'} />
          </Box>
        </Box>
      </Box>


      {/* Chores */}

      {/* Chores */}

      {/* List */}

      {/* List */}


    </Box>

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