import * as React from 'react';
import Text from '../components/text'
import Box from '../components/box'
import ExpenseBox from '../components/expensebox'


export default function Expenses() {
  return (
    <Box flex={1}>
    <Box p={10} >
      <Box flexDirection={'column'} height={160} borderRadius={'normal'} bg={'tomato'}>
        <Text p={10} fontSize={24} color={'#eeeeee'} >Total Expense: 10,000$</Text>
        <Text p={10} fontSize={20} color={'#eeeeee'} > Expense: 1,234$</Text>
        <Text p={10} fontSize={20} color={'#eeeeee'} > Expense: 567$</Text>      
      </Box>
    </Box>

    <Box>
      <ExpenseBox/>
      <ExpenseBox/>
      <ExpenseBox/>
    </Box>

    </Box>

  );
}
