import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  potatoIncrement,
  slectCouter1,
} from './counterSlice';

export function Counter() {
  const count = useSelector(slectCouter1);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('0');


  return (
    <div>
     <div>{count}</div>
     <button onClick={()=>{
       dispatch(increment());
     }}>inc</button>
     <button onClick={()=>{
       dispatch(potatoIncrement(30));
     }}>
       inc by 30</button> 
    </div>
  );
}
