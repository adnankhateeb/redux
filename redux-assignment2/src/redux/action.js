export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const GET_TODO = "GET_TODO"

export const addTodo = (data) => {
   return {
      type: ADD_TODO,
      payload: data,
   };
};

export const deleteTodo = (data) => {
   return {
      type: REMOVE_TODO,
      payload: data,
   };
};

export const toggleTodo = (data) => {
   return {
      type: TOGGLE_TODO,
      payload: data,
   };
};


