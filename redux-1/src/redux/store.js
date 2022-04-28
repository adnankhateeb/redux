import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   todos: todoReducer,
});

export const store = legacy_createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//    console.log(store.getState());
// });
