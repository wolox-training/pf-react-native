import { createTypes, completeTypes } from 'redux-recompose';

import { booksService } from '../../services/booksService/booksService';

export const actions = createTypes(completeTypes(['GET_BOOKS']));

const getBookAction = {
  type: actions.GET_BOOKS,
  target: 'books',
  service: booksService.getBooks
};
export const actionCreators = {
  getBooks: () => getBookAction
};
