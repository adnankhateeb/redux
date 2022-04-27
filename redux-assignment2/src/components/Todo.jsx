import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, toggleTodo } from "../redux/action";
import { nanoid } from "nanoid";
import axios from "axios";
import { Link } from "react-router-dom";
import "./todos.css";

export const Todo = () => {
   const dispatch = useDispatch();
   const todos = useSelector((store) => {
      return store.todos;
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
      axios.post("http://localhost:8080/todos", {
         title: text,
         status: false,
         id: id,
      });
   };

   const handleDelete = (id) => {
      dispatch(
         deleteTodo({
            id: id,
         })
      );
   };

   const handleToggle = (id) => {
      dispatch(
         toggleTodo({
            id: id,
         })
      );
   };

   return (
      <div className="entire">
         <div className="todos">
            <input
               type="text"
               placeholder="Add a to-do..."
               onChange={(e) => {
                  setText(e.target.value);
               }}
            />
            <button onClick={handleAdd}>+</button>
         </div>
         {todos.map((e) => (
            <div className="each" key={e.id}>
               <Link to={`/${e.id}`}>{e.title}</Link>
               <div>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                  <button onClick={() => handleToggle(e.id)}>Toggle</button>
               </div>
            </div>
         ))}
      </div>
   );
};
