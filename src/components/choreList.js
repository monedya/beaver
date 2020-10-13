import React from 'react';
import Box from './box';
import Text from './text';
import {View,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native'
import {useState} from 'react'
import Button from './button';
import Arrow from './icons/Arrow'




const ChoreList = () => {
    const [turns,setTurns] = useState([
        {name:'Ahmet', key:'a'},
        {name:'Mehmet', key:'b'},
        {name:'Ali', key:'c'},
        {name:'Osman', key:'d'},
    ])
    return (
        <Box flex ={1}>                     
            <FlatList 
            keyExtractor={(item,index)=>item.key}
            data={turns}
            renderItem={({item})=>{
                return(
                        <Box as={Button} p={10} >
                            <Box flexDirection={'row'} height={80} bg={'white'} borderRadius="normal" shadowColor="gray" shadowOpacity="0.1">
                                <Box ml={24} justifyContent="center">
                                <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/men/83.jpg'}}/>
                                </Box>
                                <Box ml={24} justifyContent="center">
                                    <Text mb={8} fontSize={20} color="#57ff89">NextTurn:</Text>
                                    <Text fontSize={14} color="gray">{item.name}</Text>
                                </Box>
                                <Box mr={24} flex={1} justifyContent="center" alignItems="flex-end" >
                                    <Text fontSize={24} color="gray">Chore Name</Text>
                                </Box>
                            </Box>
                        </Box>
                
                    );


                    /*
        <TouchableOpacity onPress={()=>{navigation.navigate("Details",item,turns)}}>
                <Box style={styles.container1} > 
                    <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/men/83.jpg'}}/>
                    <Box>
                    <Text ml={25} fontSize={15} color={'#38F495'}>Next turn:</Text>
                    <Text ml={25} fontSize={20} color={'#38F495'} fontWeight={'bold'}>{item.name}</Text>
                    </Box>
                    <Text ml={25} fontSize={20} color={'#F25CA2'} fontWeight={'bold'}>Laundry</Text>
                    
                </Box>
        </TouchableOpacity>
                )
                */
            }
        }
        />
        </Box>
                )
    }
    
const styles = StyleSheet.create({
    image:{
        width:45,
        height:45,
        borderRadius:25,
        borderWidth:1,
        borderColor:'black'
    },
    container1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    paddingVertical:15,
    marginTop:15,
    paddingHorizontal:20,
    borderBottomColor:'gray',
    borderBottomWidth:0.5,
    },


})

export default ChoreList
/*const Stack = createStackNavigator();

const choresNavigation=()=> {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen name="Chores" component={ListScreen} />
          <Stack.Screen name="Details" component={detailedChores} />
        </Stack.Navigator>

    );
  }
  
export default choresNavigation
*/