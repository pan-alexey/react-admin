import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

// all middlewares
const middleware = [
  applyMiddleware(thunk),
]

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production') {
  middleware.push((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(
  rootReducer,
  compose(
    ...middleware
  )
);
