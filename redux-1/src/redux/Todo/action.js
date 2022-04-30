export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import axios from 'axios';

export const addTodo = (data) => {
   return {
      type: ADD_TODO,
      payload: data,
   };
};

export const deleteTodo = (data) => {
   // console.log('data', data)
   return {
      type: REMOVE_TODO,
      payload: data,
   };
};

export const getTodos = () => async (dispatch) => {
   const data = fetch("http://localhost:8080/todos").then((d) => d.json());
   dispatch(addTodo(data));
};
