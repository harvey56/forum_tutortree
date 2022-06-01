import { configureStore } from '@reduxjs/toolkit';
import { formReducer, messageBoardReducer } from './reducers';

const store = configureStore({
  reducer: {
    formReducer,
    messageBoardReducer
  }});
  
export default store;