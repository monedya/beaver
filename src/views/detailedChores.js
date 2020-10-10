import React from 'react'
import {View, Text,StyleSheet,Button,FlatList,Image,TextInput,TouchableOpacity} from 'react-native'
//import CustomButton from '../components/customButton'

const detailedChores = ({navigation,route}) => {
    const{name}=route.params
    const{turns}=route.params
    return (
        <View style={styles.container}>
            <Text style={styles.editText}>Edit</Text>
            <View style={styles.container2}>
                <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/men/83.jpg'}} />
                <Text style={styles.turnText}>It's {name} Turn</Text>
                
                <Button
                    title="Complete Your Chore"
                    onPress={()=>{alert("hi")}}
                />
            <TouchableOpacity>
                <Text style={styles.skipText}>Skip Turn</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.noteText}>Notes:</Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.turnHistoryText}>Turn History</Text>
            <View>
    <Text>{name}</Text>
                <Text style={styles.turnText}>History gelecek</Text>
                <Text style={styles.turnText}>History gelecek</Text>
                <Text style={styles.turnText}>History gelecek</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        paddingTop:25,
        paddingHorizontal:20,},
    container2:{ 
        alignItems: 'center',
        paddingTop:25,
        paddingHorizontal:20,
    },
    editText:{
        fontSize:18,
        textAlign: 'right',
        color:'#F25CA2'
    },
    image:{

        width:45,
        height:45,
        borderRadius:25,
        borderWidth:1,
        borderColor:'black'},
    turnText:{
        fontWeight: 'bold',
        fontSize:20
    },
    skipText:{
        textDecorationLine:'underline',
        fontSize:16,
        paddingTop:5,
        color:'#F25CA2'
    },
    noteText:{
        paddingTop:15,
        color:'gray',
        fontWeight: 'bold',
    },
    textInput:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:12,
    },
    turnHistoryText:{
        paddingTop:15,
        fontWeight: 'bold',
        color:'gray'
    }


})
export default detailedChores