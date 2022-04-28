import { legacy_createStore } from "redux";
import { counterReducer } from "./reducer";



export const store = legacy_createStore(
   counterReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//    console.log(store.getState());
// });
