import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListScreen from './chorsHome'
import choresNavigation from './chorsHome'

function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}

function Activity() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Activity!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}


//burasi yeni 
function Chores() {
  return (
     <ListScreen/>

  );
}

function Expenses() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Expenses1!</Text>
    </View>
  );
}

function List() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List!</Text>
    </View>
  );
}
const Tab1 = createMaterialTopTabNavigator();

 function Pager() {
  return (
    
      <Tab1.Navigator
      initialRouteName="Expenses"
      >
        <Tab1.Screen name="Chores" component={choresNavigation} />
          <Tab1.Screen name="Expenses" component={Expenses} />
        <Tab1.Screen name="List" component={List} />
      </Tab1.Navigator>
    
  );
}

const Tab = createMaterialBottomTabNavigator();

const Main = () =>  {
  return (
   
    <NavigationContainer>
       <Header
          backgroundColor= "tomato"
         centerComponent={{ text: 'beaver', style: { fontSize:20,color: '#fff' } }}
/>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen 
          name="Home"
          component={Pager} 
          options={{
           tabBarLabel: 'Home',
            tabBarColor:'tomato',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
         />
        <Tab.Screen 
          name="Chat" 
          component={Chat} 
          options={{
            tabBarLabel: 'Chat',
            tabBarColor:'#009387',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Activity" 
          component={Activity} 
          options={{
            tabBarLabel: 'Activity',
          tabBarColor:'#694fad',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarLabel: 'Updates',
            tabBarColor:'#d02860',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main