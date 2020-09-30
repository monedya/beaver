import React from 'react'
import {View,StyleSheet,Button,FlatList,Text,TouchableOpacity,Image} from 'react-native'
import detailedChores from './detailedChoresPage'
import { createStackNavigator } from '@react-navigation/stack';

const ListScreen = ({navigation,name})=>{
    const turns = [
        {name:'Ahmet', key:1},
        {name:'Mehmet', key:2},
        {name:'Ali', key:3},
        {name:'Osman', key:4},
    ]
    return (
            <View style={styles.container}>
            <FlatList 
            keyExtractor={(item)=>item.key}
            data={turns}
            renderItem={({item})=>{
                return  <TouchableOpacity onPress={()=>{navigation.navigate("Details")}}>
                <View style={styles.container1}>
                    <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/men/86.jpg'}}/>
                    <View>
                    <Text style={styles.topText}>Next turn:</Text>
                    <Text style={styles.itemText1}>{item.name}</Text>
                    </View>
                    <Text style={styles.choreTypeText}>Laundry</Text>
                </View>
                </TouchableOpacity> 
            }
            }
            />
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
    
         paddingTop:25,
         paddingHorizontal:20,
    //   backgroundColor:'gray',
    },
    itemText: {
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,

    },
    image:{
        width:45,
        height:45,
        borderRadius:25,
        borderWidth:1,
        borderStyle: 'solid',
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
    itemText1: {
        marginLeft:25,
        fontWeight: 'bold',
        fontSize:20,

    },
    topText:{
        marginLeft:25,
        fontSize:15,
        color: '#38F495'
    },
    choreTypeText:{
        fontWeight: 'bold',
        fontSize:20,
        color:'#F25CA2',
        
    }
})
const Stack = createStackNavigator();

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


