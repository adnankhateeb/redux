import {
   DECREMENT,
   INCREMENT,
   MULTIPLY,
   DIVIDE,
   POWER,
   MODULO,
   RESET
} from "../actions/action";
const initState = {
   calculator: 0,
};

export const reducer = (store = initState, action) => {
   switch (action.type) {
      case INCREMENT:
         return { ...store, calculator: store.calculator + action.payload };
      case DECREMENT:
         return { ...store, calculator: store.calculator - action.payload };
      case MULTIPLY:
         return { ...store, calculator: store.calculator * action.payload };
      case MODULO:
         return {
            ...store,
            calculator: Math.round(store.calculator % action.payload),
         };
      case DIVIDE:
         return {
            ...store,
            calculator: Math.round(store.calculator / action.payload),
         };
      case POWER:
         return {
            ...store,
            calculator: store.calculator ** action.payload,
         };
      case RESET:
         return {
            ...store, calculator : 0
         }
      default:
         return store;
   }
};
