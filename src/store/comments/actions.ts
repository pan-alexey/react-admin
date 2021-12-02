import { Dispatch } from 'redux';

export enum ActionType {
  GET_POST_COMMENTS_PENDING = 'GET_POST_COMMENTS_PENDING',
  GET_POST_COMMENTS_SUCCESS = 'GET_POST_COMMENTS_SUCCESS',
  GET_POST_COMMENTS_FAIL = 'GET_POST_COMMENTS_FAIL'
}

interface actionPending {
  type: ActionType.GET_POST_COMMENTS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_POST_COMMENTS_SUCCESS;
  payload: string[];
}

interface actionFail {
  type: ActionType.GET_POST_COMMENTS_FAIL;
  payload: string ;
}

export type Action = actionPending | actionSuccess | actionFail;

export const getComments = (postId: string) => {
  return async (dispatch: Dispatch<Action>) => {
      dispatch({
          type: ActionType.GET_POST_COMMENTS_PENDING
      });

      try {
          const { data } = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => res.json());
          console.log(data);
          dispatch({
              type: ActionType.GET_POST_COMMENTS_SUCCESS,
              payload: data  
          });

      } catch(err) {
          dispatch({
              type: ActionType.GET_POST_COMMENTS_FAIL,
              payload: (err as any).message,
          });
      }
  }
}