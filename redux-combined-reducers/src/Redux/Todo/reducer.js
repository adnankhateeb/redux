import { ADD_TODO, REMOVE_TODO } from "./action";
const initState = {
   todos: []
};

export const todoReducer = (store = initState, action) => {
   switch (action.type) {
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
      case REMOVE_TODO:
         return {
            ...store,
            todos: [
               ...store.todos.filter((e) => {
                  return e.id !== action.payload.id;
               }),
            ],
         };
      default:
         return { ...store };
   }
};
