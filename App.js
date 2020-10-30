// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import ProfileScreen from './src/screens/ProfileScresen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen'
import HomeScreen from './src/screens/HomeScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, StackActions } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack(){
return(
  <Stack.Navigator
      initialRou
      teName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'green'},
        headerBackTitle:'返回',
        headerTintColor:'black'
      }}
  >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: '返回' }}/>
    </Stack.Navigator>

  )
}

function MyProfileStack(){
  return(
  <Stack.Navigator
    initialRouteName='Profile'
    screenOptions={{
      headerStyle:{backgroundColor:'green'},
      headerBackTitle:'返回 2',
      headerTintColor:'black'
    }}
>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="ProfileDetailScreen" component={ ProfileDetailScreen}  options={{ title: '返回' }}/>
  </Stack.Navigator>
  )

}

export default function App() {


  return (
    // <View style={styles.container}>

  
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route})=>({
          tabBarIcon: ({color,focused})=> {
            let iconName
          if(route.name == 'Home'){
            iconName = focused ?'ios-trophy' : 'ios-ingormation-circle-outline'
          
          }else if(route.name == 'Settings'){
            iconName = focused ? 'ios-options' : 'ios-list'
            
          }
          return <Ionicons name={iconName} size={25} color={color}/>
        }
        })}
        tabBarOptions={{
          activeTintColor:'tomato',
          inactiveTintColor:'gray'
        }}
        
      >
          <Tab.Screen name="Home" component={MyHomeStack} />
          <Tab.Screen name="Settings" component={MyProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
