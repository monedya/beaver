import React from 'react';
import Box from './box';
import Text from './text';
import {View,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native'
import {useState} from 'react'
import Button from './button';
import Arrow from './icons/Arrow'



const ChoreBox = () => {
    return (
        <Box as={Button} p={10} >
                            <Box flexDirection={'row'} height={80} bg={'white'} borderRadius="normal" shadowColor="gray" shadowOpacity="0.1">
                                <Box ml={24} justifyContent="center">
                                <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/men/83.jpg'}}/>
                                </Box>
                                <Box ml={24} justifyContent="center">
                                    <Text mb={8} fontSize={20} color="#57ff89">NextTurn:</Text>
                                    <Text fontSize={14} color="gray">Osman</Text>
                                </Box>
                                <Box mr={24} flex={1} justifyContent="center" alignItems="flex-end" >
                                    <Text fontSize={24} color="gray">Chore Name</Text>
                                </Box>
                            </Box>
                        </Box>
    );
}


const styles = StyleSheet.create({
    image:{
        width:45,
        height:45,
        borderRadius:25,
        borderWidth:1,
        borderColor:'black'
    },
 })


 export default ChoreBox
