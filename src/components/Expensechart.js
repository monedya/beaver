import React from 'react';
import Box from './box';
import Button from './button';
import Text from './text';


import AccountBalanceWallet24Px from './icons/AccountBalanceWallet24Px'
import AddCircle24Px from './icons/AddCircle24Px'


const ExpenseChart = () => {

    return (
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
        <Text mt={8} >Esad</Text>
        <Text>Esad</Text>
        <Text>Esad</Text>
        <Text>Esad</Text>
      </Box>

      {/* Add Button */}
      <Box alignItems="flex-end">
        <Box as={Button} mt={-24} width={48} height={48} borderRadius='full'  >
          <AddCircle24Px width={32} height={32} fill={'black'} />
        </Box>
      </Box>
    </Box>
    );

}
export default ExpenseChart