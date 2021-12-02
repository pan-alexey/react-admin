import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { commentsReducer } from './comments/reducer';

const reducers = combineReducers({
  comments: commentsReducer
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() // for debug
  )
);


// export interface RootState {
//   session: SessionState
// }

// export default createStore(
//   combineReducers<RootState>({
//     session
//   }),

// )