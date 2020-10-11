import React from 'react';
import Box from './box';
import Button from './button';
import Text from './text';
import Arrow from './icons/Arrow'


const ExpenseBox = () => {

    return (
        <Box as={Button} p={10} >
            <Box flexDirection={'row'} height={80} bg={'white'} borderRadius="normal" shadowColor="gray" shadowOpacity="0.1">
                <Box ml={24} justifyContent="center">
                    <Arrow />
                </Box>
                <Box ml={24} justifyContent="center">
                    <Text mb={8} fontSize={20} color="black">Expense</Text>
                    <Text fontSize={14} color="gray">DD/MM/YYYY</Text>
                </Box>
                <Box mr={24} flex="1" justifyContent="center" alignItems="flex-end" >
                    <Text fontSize={24} color="gray">47$</Text>
                </Box>
            </Box>
        </Box>

    );

}

export default ExpenseBox