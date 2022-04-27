import { legacy_createStore } from "redux";

// avoid spelling mistakes
const ADD_COUNT = "ADD_COUNT";
const ADD_TODO = "ADD_TODO";
const SWITCH_THEME = "SWITCH_THEME";

//action creators -> reusable functions
const addTodo = (title) => {
   return {
      type: ADD_TODO,
      payload: {
         title: title,
         status: false,
      },
   };
};

//switch to make better performance and make it more readable
const reducer = (store, action) => {
   switch (action.type) {
      case ADD_COUNT:
         return { ...store, counter: store.counter + action.payload };
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
      case SWITCH_THEME:
         return { ...store, theme: store.theme === "dark" ? "light" : "dark" };
      default:
         return { ...store };
   }
};

const initState = {
   counter: 0,
   todos: [],
   theme: "light",
};

const store = legacy_createStore(reducer, initState);
console.log("initial store:", store.getState());

store.dispatch({ type: ADD_COUNT, payload: 1 });

//calling with action creators
store.dispatch(addTodo("hello"));

store.dispatch(addTodo("hello2"));

store.dispatch({
   type: SWITCH_THEME,
});

console.log("store after dispatches:", store.getState());
