import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import SearchText from './Search/SearchText';


import { View,Text,Button,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import store from './Search/store';
import TextThroughUseSelectortext from './Search/changeTextbyuseselector';


const HomeScreen = ({ navigation }) => {
 
  const[text,Searhtext]=useState(SearchText.text1);

  const fetchSettings =() =>{
   Searhtext(SearchText.text1)
  }

  useEffect(() => { const unsubscribe = navigation.addListener("focus",()=>{

    fetchSettings() })
    return unsubscribe;
    
    },[navigation])
    
    return (
      
      <SafeAreaView style={{ functionflex: 1}}>
         <ScrollView>
          <View>
             <Text testID='welcome'>Get Your Movie</Text>

           <View style={{marginTop:40}} > 
             <Button
             title="List"
             onPress={() =>
             navigation.navigate('List') }
           />
           </View>
           
           <View style={{marginTop: 20}}>
             < Button 
             title="Search" 
             onPress={() =>
             navigation.navigate('Search') }
             />
           </View>

           
           <View style={{margin:20}}>
             <Text>Last Movie Search Updated by Hook:   {text}</Text>
           </View>
           <Provider store={store}>
              <TextThroughUseSelectortext/>
           </Provider>
           </View>
         </ScrollView>
       </SafeAreaView>
    );
  };

  export  default HomeScreen;


