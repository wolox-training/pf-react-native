import { combineReducers as CR } from 'redux';
import { wrapCombineReducers } from 'redux-recompose';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth/reducer';
import { booksReducer } from './books/reducer';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = navReducer =>
  combineReducers({
    auth: authReducer,
    books: booksReducer,
    form: formReducer
  });

export default rootReducer;
