import * as React from 'react';
import { ScrollView } from 'react-native'
import Box from '../components/box'
import Button from '../components/button'
import Text from '../components/text'
import Input from '../components/input'

import Profile from '../components/icons/Profile'

export default function AddExpense() {
  return (
    <Box as={ScrollView} flex={1}>
      <Text m={10}>Expense:</Text>
      <Box mx={10} height={25} flexDirection={'row'}>
        <Box as={Input} flex={1}>
          <Text fontSize={30} color='gray'>Expense Name</Text>
        </Box>
      </Box>

      <Box mx={10} height={2} flexDirection={'row'} >
        <Box flex={1} bg={'gray'}>
        </Box>
      </Box>

      <Text m={10}>Total:</Text>

      <Box mx={10} height={25} flexDirection={'row'}>
        <Box as={Input} flex={1}>
          <Text alignSelf="center">Expense Amount </Text>
        </Box>
      </Box>

      <Box mx={10} height={2} flexDirection={'row'} >
        <Box flex={1} bg={'gray'}>
        </Box>
      </Box>

      <Text m={10}>Note:</Text>

      <Box mx={10} height={25} flexDirection={'row'}>
        <Box as={Input} flex={1}>
          <Text fontSize={30} color='gray'>Not Necassary</Text>
        </Box>
      </Box>

      <Box mx={10} height={2} flexDirection={'row'} >
        <Box flex={1} bg={'gray'}>
        </Box>
      </Box>
      <Box m={10} flex={1} flexDirection={'row'} alignItems='center' >
        <Box alignItems="center" flexDirection={'row'}>

          <Text flex={1} mx={10} fontSize={24} >Who Pays</Text>
          <Text ml={10} fontSize={24} >Amount</Text>
        </Box>
      </Box>

      <Box as={Button} mx={10} flex={1} flexDirection={'row'} height={50} alignItems="center" >
        <Profile margin={10} fill={'black'} />
        <Text m={10} flex={1} fontSize={20} >Osman Kaya</Text>
        <Box alignItems="center" height={20} >
          <Input alignSelf='center' fontSize={24}>47.32$</Input>
        </Box>
      </Box>

      <Box as={Button} mx={10} flex={1} flexDirection={'row'} height={50} alignItems="center">
        <Profile margin={10} fill={'black'} />
        <Text m={10} flex={1} fontSize={20} >Esad</Text>
        <Box alignItems="center" height={20} >
          <Input alignSelf='center' fontSize={24}>47.32$</Input>
        </Box>
      </Box>

      <Box as={Button} mx={10} flex={1} flexDirection={'row'} height={50} alignItems="center">
        <Profile margin={10} fill={'black'} />
        <Text m={10} flex={1} fontSize={20} >Utku Uğur</Text>
        <Box alignItems="center" height={20} >
          <Input alignSelf='center' fontSize={24}>47.32$</Input>
        </Box>
      </Box>

      <Box as={Button} mx={10} flex={1} flexDirection={'row'} height={50} alignItems="center">
        <Profile margin={10} fill={'black'} />
        <Text m={10} flex={1} fontSize={20} >Murathan</Text>
        <Box alignItems="center" height={20} >
          <Input alignSelf='center' fontSize={24}>47.32$</Input>
        </Box>
      </Box>
      <Box mx={10} height={2} flexDirection={'row'} >
        <Box flex={1} bg={'gray'}>
        </Box>
      </Box>
<Box m={10} mt={20} as ={Button} flex={1} bg={'#1f3c88'} height={50} borderRadius={8} >
 <Text color={'white'} fontSize={20} >Add Expense</Text>
</Box>


    </Box>

  );
}
