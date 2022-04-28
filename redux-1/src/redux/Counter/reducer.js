import { ADD_COUNT } from "./action";
const initState = {
   counter: 0,
   todos: [],
};

export const counterReducer = (store=initState, action) => {
   switch (action.type) {
      case ADD_COUNT:
         return { ...store, counter: store.counter + action.payload };
      default:
         return { ...store };
   }
};
