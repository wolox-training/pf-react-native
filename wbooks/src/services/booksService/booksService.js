import api from '../../config/api';
import { BOOKS_URL } from '../../constants/urls';

export const booksService = {
  getBooks: () => api.get(BOOKS_URL)
};
