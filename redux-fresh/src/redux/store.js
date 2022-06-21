import { legacy_createStore } from "redux";
import { reducer } from "./Calculator/reducers/reducer";


const store = legacy_createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
})

export { store };
