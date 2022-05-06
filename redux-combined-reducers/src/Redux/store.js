import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./Todo/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
   auth: authReducer,
   todos: todoReducer,
});

export const store = legacy_createStore(rootReducer);

store.subscribe(() => {
   console.log(store.getState());
});
