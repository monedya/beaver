import * as React from 'react';
import Text from '../components/text'
import Box from '../components/box'


export default function Expenses() {
  return (
    
    <Box p={10} >
      <Box flexDirection={'column'} height={160} borderRadius={8} bg={'#7579e7'}>
        <Text p={10} fontSize={20} color={'#eeeeee'} >Total Expense: 10,000$</Text>
        <Text p={10} fontSize={20} color={'#eeeeee'} > Expense: 1,234$</Text>
        <Text p={10} fontSize={20} color={'#eeeeee'} > Expense: 567$</Text>      
      </Box>
    </Box>
  );
}
