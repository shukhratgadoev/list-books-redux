import { combineReducers } from 'redux';

import { FetchBooksListData } from './booksList';
import { appReduser } from './appReducer';

export const rootReducer = combineReducers({
	books: FetchBooksListData,
	app: appReduser,
});
