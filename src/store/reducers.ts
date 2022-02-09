import {combineReducers} from "redux";

import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>