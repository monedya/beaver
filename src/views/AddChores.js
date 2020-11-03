import * as React from 'react';
import Box from '../components/box'
import Button from '../components/button'
import Text from '../components/text'
import { ScrollView } from 'react-native'

export default function AddChores() {
  return (  
    <Box as={ScrollView}  flex={1}>
      
      <Box align={'center'}  flexDirection={'row'} justifyContent={"space-between"} m={25} > 
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             </Box>
             <Text>Laundry</Text>
           </Box>
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
             <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             </Box>
             <Text>Laundry</Text>
           </Box>
            <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              </Box>
              <Text>Laundry</Text>
            </Box>
      </Box>

      <Box align={'center'}  flexDirection={'row'} justifyContent={"space-between"} m={25} > 
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             </Box>
             <Text>Laundry</Text>
           </Box>
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
             <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             </Box>
             <Text>Laundry</Text>
           </Box>
            <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              </Box>
              <Text>Laundry</Text>
            </Box>
      </Box>

      <Box align={'center'}  flexDirection={'row'} justifyContent={"space-between"} m={25} > 
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             </Box>
             <Text>Laundry</Text>
           </Box>
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
             <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             </Box>
             <Text>Laundry</Text>
           </Box>
            <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              </Box>
              <Text>Laundry</Text>
            </Box>
      </Box>
      
     
     
    </Box>
 
  );
}
