import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { deleteTodo, toggleTodo } from "../redux/action";
import "./todos.css";
export default function SingleTodo() {
   const dispatch = useDispatch();
   const { id } = useParams();
   let single;
   useSelector((store) => {
      return store.todos.map((e) => {
         if (id === e.id) {
            single = e;
         }
      });
   });

   const handleDelete = (id) => {
      dispatch(
         deleteTodo({
            id: id,
         })
      );
      <Navigate to={-2} />;
   };

   const handleToggle = (id) => {
      dispatch(
         toggleTodo({
            id: id,
         })
      );
   };
   return (
      <div key={id}>
         {single ? (
            <div>
               <h2>Todo: {single.title}</h2>
               <h2>Status: {single.status ? "Completed" : "In Progress"}</h2>
               <button className="btn" onClick={() => handleDelete(id)}>
                  Delete
               </button>
               <button className="btn" onClick={() => handleToggle(id)}>
                  Toggle
               </button>
            </div>
         ) : (
            <h2>Todo deleted</h2>
         )}
      </div>
   );
}
