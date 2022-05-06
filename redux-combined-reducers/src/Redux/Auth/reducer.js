import { LOGIN } from "./actions";

const init = {
   isAuth: false,
};

export const authReducer = (store = init, { type, payload }) => {
   switch (type) {
      case LOGIN:
         return { isAuth: true };
      default:
         return store;
   }
};
