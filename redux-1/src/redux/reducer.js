import { ADD_COUNT, ADD_TODO, REMOVE_TODO } from "./action";
const initState = {
   counter: 0,
   todos: [],
};

export const counterReducer = (store=initState, action) => {
   switch (action.type) {
      case ADD_COUNT:
         return { ...store, counter: store.counter + action.payload };
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
      case REMOVE_TODO:
         return {
            ...store,
            todos: [
               ...store.todos.filter((e) => {
                  return e.title !== action.payload.title;
               }),
            ],
         };
      default:
         return { ...store };
   }
};
