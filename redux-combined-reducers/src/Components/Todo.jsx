import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../redux/Todo/action";
import { nanoid } from "nanoid";
import { Navigate } from "react-router-dom";

export const Todo = () => {
   const isAuth = localStorage.getItem("authState");
   const dispatch = useDispatch();
   const todos = useSelector((store) => {
      return store.todos.todos;
   });

   const [text, setText] = useState("");

   const handleAdd = () => {
      let id = nanoid(4);
      dispatch(
         addTodo({
            title: text,
            status: false,
            id: id,
         })
      );
   };

   const handleDelete = (id) => {
      dispatch(
         deleteTodo({
            id: id,
         })
      );
   };

   if (isAuth === null || isAuth === false) {
      return <Navigate to={"/login"} />;
   }

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
               <button onClick={() => handleDelete(e.id)}>-</button>
            </div>
         ))}
      </div>
   );
};
