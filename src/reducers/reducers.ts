import { AnyAction, combineReducers } from 'redux';

type Comments = {
  id: number;
  votes: number;
  comment: string; 
  pseudonym: string;
  title?: string;
  type?: 'Post' | 'Reply';
}[]

type formReducerState = {
  comments: Comments;
}

export const initialValues: formReducerState = {comments: []};

export function formReducer (state = initialValues, action: AnyAction): formReducerState {
  let commentIndex: number;
  let newState: Comments;
  let parentPostIndex: number;
  
  switch (action.type) {    
    case 'UPDATE_COMMENTS_LIST':
      const { id, votes, comment, pseudonym, title, type } = action.payload;
      if(type === 'Post'){
        return {
          ...state,
          comments: [...state.comments, {id, votes, comment, pseudonym, title}]
        }
      }
      else{ // type === 'Reply'
        // if type is a reply, it should be inserted at the right place in its parent post
        // parentPostIndex = state.comments.findIndex(el => el.title === action.payload.title);
        // newState = [...state.comments];

        // return {
        //   ...state, comments: newState
        // }
        return {
          ...state,
          comments: [...state.comments, {id, votes, comment, pseudonym}]
        }
      }

    case 'UPVOTE_COMMENT':
      commentIndex = state.comments.findIndex(el => el.id === action.payload);
      newState = [...state.comments];
      newState[commentIndex] = {...newState[commentIndex], votes: newState[commentIndex].votes+1};
      return {...state, comments: newState}
    

    case 'DOWNVOTE_COMMENT':
      commentIndex = state.comments.findIndex(el => el.id === action.payload);
      newState = [...state.comments];
      newState[commentIndex] = {...newState[commentIndex], votes: newState[commentIndex].votes-1};
      return {...state, comments: newState}

    case 'RESET_FORM':
      return {
        ...state
      };
    default:
      return state;
      // throw new Error(`Unknown action type: ${action.type}`);
  }
};

interface messageBoardReducerState {
  isOpenPost: boolean;
  isOpenReply: boolean;
}

export const messageBoardInitialValues: messageBoardReducerState = { isOpenPost: false, isOpenReply: false };

export function messageBoardReducer(state = messageBoardInitialValues, action: AnyAction) {
  
  switch (action.type) {
    case 'HANDLE_MODAL_POST':
      return {
        ...state,
        isOpenPost: action.payload
      }
    
    case 'HANDLE_MODAL_REPLY':
      return {
        ...state,
        isOpenReply: action.payload
      }
    
      default:
        return state;
  }
}

export interface Store {
  formReducer: formReducerState;
  messageBoardReducer: messageBoardReducerState;
}

const reducer = combineReducers<Store>({
  formReducer, messageBoardReducer
});

export default reducer;