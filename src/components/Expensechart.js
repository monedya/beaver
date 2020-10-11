import React from 'react';
import Box from './box';
import Text from './text';
import Arrow from './icons/Arrow'

const ExpenseChart = () => {

    return (
        <Box flex={1}>
    <Box p={10} >
      <Box flexDirection={'column'} height={160} borderRadius={'normal'} bg={'tomato'}>
        <Text p={10} fontSize={24} color={'#eeeeee'} >Total Expense: 10,000$</Text>
        <Text p={10} fontSize={20} color={'#eeeeee'} > Expense: 1,234$</Text>
        <Text p={10} fontSize={20} color={'#eeeeee'} > Expense: 567$</Text>      
      </Box>
    </Box>
    </Box>
    );

}

export default ExpenseChart