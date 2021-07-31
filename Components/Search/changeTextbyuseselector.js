import 'react-native-gesture-handler';
import React from 'react';

import {View,Text} from 'react-native'

import { useSelector} from 'react-redux'

const TextThroughUseSelectortext=()=> {

  const mytext=useSelector((state)=>{
    return state.text1
  })
    
    {
      return(
      <View> 
        <View style={{margin: 20}} >
         <Text>Last Movie Updated by UseSelector: {mytext}</Text>
        </View>     
      </View>
      );
    }
  }

  export default TextThroughUseSelectortext