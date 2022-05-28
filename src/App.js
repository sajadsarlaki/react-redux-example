
import React from 'react';
import {useSelector} from 'react-redux';
import {increment, decrement, addNumber} from './actions';
import {useDispatch} from 'react-redux'
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();
  return (
    <div className="App">
        Counter = {counter}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(addNumber(5))}>add five</button>


        <br/>
        Logged in = {isLogged.toString()}
    </div>
  );
}

export default App;
