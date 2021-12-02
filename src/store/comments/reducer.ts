import { Action, ActionType } from './actions';

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

interface State {
  comments: Comment[],
  loading: boolean,
  error: string | null 
}

const initialState: State = {
  comments: [],
  loading: false,
  error: null,
}

export const commentsReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.GET_POST_COMMENTS_PENDING:
        return {
            loading: true,
            comments: [],
            error: null  
        } 
    case ActionType.GET_POST_COMMENTS_SUCCESS:
        return {
            loading: false,
            comments: action.payload,
            error: null 
        }
    case ActionType.GET_POST_COMMENTS_FAIL:
        return {
            loading: false,
            error: action.payload,
            comments: []
        }
    default: 
        return state;
  }
}