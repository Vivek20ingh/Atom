import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

enableScreens();

import HomeScreen from './Components/HomeScreen';
import ListScreen from './Components/List';
import MovieScreen from './Components/MovieScreen';
import SearchScreen from './Components/Search/Search/Screen1';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
         
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Movie" component ={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};


export default MyStack;


