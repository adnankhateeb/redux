import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos } from "../redux/Todo/action";
import axios from "axios";
import { nanoid } from "nanoid";

export const Todo = () => {
   const dispatch = useDispatch();
   const todos = useSelector((store) => {
      return store.todos.todos;
   });

   const [text, setText] = useState("");

   const handleAdd = () => {
      axios
         .post("http://localhost:8080/todos", {
            title: text,
            status: false,
            id: nanoid(4),
         })
         .then(() => {
            dispatch(getTodos());
         });
   };

   const handleDelete = (title) => {
      dispatch(
         deleteTodo({
            title: title,
         })
      );
   };

   useEffect(() => {
      dispatch(getTodos());
   }, []);

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
            <div key={e.id}>
               <div>{e.title}</div>
               <button onClick={() => handleDelete(e.title)}>-</button>
            </div>
         ))}
      </div>
   );
};
