import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   todos: todoReducer,
});

// const middleware = (store) => (next) => (action) => {
//    if (typeof action === "function") {
//       return action(store.dispatch);
//    }
//    next(action);
// };

export const store = legacy_createStore(
   rootReducer,
   applyMiddleware(thunk)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//    console.log(store.getState());
// });
