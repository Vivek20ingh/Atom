import 'react-native-gesture-handler';
import SearchText from './SearchText';

import { createStore,compose,applyMiddleware} from 'redux';
import thunk from'redux-thunk';

const middleware=[thunk];

const intialState = {
    counter: 0,
    text1: SearchText.text
}

const reducer =(state =intialState,action) =>{
    switch(action.type)
    {
        case 'CHANGE_TEXT':
        {
            return{
                text1: SearchText.text,
                counter: state.counter+1
            }
        }
    }
    return state
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&

    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ 
    trace: true, 
    traceLimit: 25 
}) || compose; 


const store =createStore(reducer,composeEnhancers(applyMiddleware(...middleware)));

export default store;