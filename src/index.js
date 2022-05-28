import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// ---------------------------- redux ------------------------------------
import { createStore } from 'redux';

// *********************************************************************************************
/*//-------------------------------------------- basic redux --------------------------------
//Store -> global state
//Action: type of things we can do for example: increment the counter
const increment = () =>{
  return{
    type: 'INCREMENT'
  }
}
const decrement = () =>{
  return{
    type: 'DECREMENT'
  }
} 
// --------------------------------------------------
//Reducer: The responses to the actions
const counterReducer = (state =0, action) => {
    switch(action.type){
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;  
}
}
let store = createStore(counterReducer);
store.subscribe(()=>console.log(store.getState()));
// --------------------------------------------------
//Dispatch: trigger the reducer and execute the action

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
//***************************************************************************************** 
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
