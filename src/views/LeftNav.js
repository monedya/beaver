import * as React from 'react';
import{Text,SafeAreaView} from 'react-native'

import Box from '../components/box'
import ExpenseChart from '../components/Expensechart'

export default function Left() {
  return (  
    <Box flex={1}>
      <ExpenseChart/>
    </Box>
    
 
  );
}
