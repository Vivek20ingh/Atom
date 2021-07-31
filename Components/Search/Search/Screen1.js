
import 'react-native-gesture-handler';
import React,{Component} from 'react';

import Search from './Search';
import { Provider } from 'react-redux';
import store from '../store';



const SearchScreen =()=> {
    {
      return(
          <Provider store={store}>
            <Search/>
          </Provider>
      );
    }
  }
  
  export default SearchScreen