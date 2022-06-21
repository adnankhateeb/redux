import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
   increment,
   decrement,
   multiply,
   divide,
   power,
   modulo,
} from "../redux/Calculator/actions/action";

const Calculator = () => {
   const calculator = useSelector((state) => state.calculator);
   const dispatch = useDispatch();
   const [val, setVal] = useState(1);
   const handleChange = (e) => {
      setVal(Number(e.target.value));
   };

   return (
      <div className='calculator'>
         <h1>Value: {calculator}</h1>
         <input onChange={handleChange} type='Number' />
         <div className="buttons">
            <button onClick={() => dispatch(increment(val))}>+</button>
            <button onClick={() => dispatch(decrement(val))}>-</button>
            <button onClick={() => dispatch(multiply(val))}>x</button>
            <button onClick={() => dispatch(divide(val))}>÷</button>
            <button onClick={() => dispatch(power(val))}>^</button>
            <button onClick={() => dispatch(modulo(val))}>%</button>
            <div></div>
            <button onClick={() => dispatch(modulo(val))}>RESET</button>
         </div>
      </div>
   );
};

export default Calculator;
