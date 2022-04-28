import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../redux/action";

export const Todo = () => {
   const dispatch = useDispatch();
   const todos = useSelector((store) => {
      return store.todos;
   }  );

   const [text, setText] = useState("");

   const handleAdd = () => {
      dispatch(
         addTodo({
            title: text,
            status: false,
         })
      );
   };

   const handleDelete = (title) => {
      dispatch(
         deleteTodo({
            title: title,
         })
      );
   };
   console.log('todo')

   return (
      <div>
         <input
            type="text"
            placeholder="Add a to-do..."
            onChange={(e) => {
               setText(e.target.value);
            }}
         />
         <button onClick={handleAdd}>+</button>

         {todos.map((e, i) => (
            <>
               <div key={i}>{e.title}</div>
               <button key = {i+10} onClick={() => handleDelete(e.title)}>-</button>
            </>
         ))}
      </div>
   );
};
