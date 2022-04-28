
import { addCount } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
    const dispatch = useDispatch();
    console.log('Counter')
  const counter = useSelector((store) => store.counter)
    return <div>
         <h1>Count: {counter}</h1>
         <button
            onClick={() => {
               dispatch(addCount(1));
            }}
         >
            Add 1
         </button>
    </div>
}