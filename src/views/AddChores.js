import * as React from 'react';
import Box from '../components/box'
import Button from '../components/button'
import Text from '../components/text'
import { ScrollView } from 'react-native'

import Construction from '../components/icons/Construction'
import Eco from '../components/icons/Eco'
import Soap from '../components/icons/Soap'
import Wash from '../components/icons/Wash'

export default function AddChores() {
  return (  
    <Box as={ScrollView}  flex={1}>
      
      <Box align={'center'}  flexDirection={'row'} justifyContent={"space-between"} m={25} > 
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              <Eco width={25} height={25} fill={'black'} />
             </Box>
             <Text>Laundry</Text>
           </Box>
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
             <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             <Construction width={25} height={25} fill={'black'} />
             </Box>
             <Text>Dishes </Text>
           </Box>
            <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              <Wash width={25} height={25} fill={'black'} />
              </Box>
              <Text>Feeding </Text>
            </Box>
      </Box>

      <Box align={'center'}  flexDirection={'row'} justifyContent={"space-between"} m={25} > 
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              <Eco width={25} height={25} fill={'black'} />
             </Box>
             
             <Text>Preparing </Text>
           </Box>
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
             <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             <Construction width={25} height={25} fill={'black'} />
             </Box>
             <Text>Cleaning </Text>
           </Box>
            <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              <Wash width={25} height={25} fill={'black'} />
              </Box>
              <Text>Dusting </Text>
            </Box>
      </Box>

      <Box align={'center'}  flexDirection={'row'} justifyContent={"space-between"} m={25} > 
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              <Soap width={25} height={25} fill={'black'} />
             </Box>
             <Text>Taking </Text>
           </Box>
           <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
             <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
             <Construction width={25} height={25} fill={'black'} />
             </Box>
             <Text>Clean garage</Text>
           </Box>
            <Box alignItems={'center'} flex-direction={'column'} justifyContent={"center"}>
              <Box as={Button}  width={75} height={75} bg={'#01BFF0'} borderRadius={25}> 
              <Construction width={25} height={25} fill={'black'} />
              </Box>
              <Text>Add More</Text>
            </Box>
      </Box>
      
      <Box as={Button} bg={'#00CBFF'} ml={20} mr={20} 
      flexDirection={'row'} height={48} borderRadius={12} mt={35}
      //onPress={navigation.navigate('Details')}
      >
        <Text color={'black'} fontSize={22} > Next</Text>
      </Box>
     
    </Box>
 
  );
}
