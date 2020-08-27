import * as types from '../actionTypes/types';

const initialState = {
	fetchedBooks: [],
	categories: [
		{
			alias: 'psychology',
			name: 'психология',
			id: 1,
		},
		{
			alias: 'scienceTechnology',
			name: 'научные технологии',
			id: 2,
		},
		{
			alias: 'booksForChildren',
			name: 'книги для детей',
			id: 3,
		},
		{
			alias: 'businessLiterature',
			name: 'деловая литература',
			id: 4,
		},
		{
			alias: 'history',
			name: 'История',
			id: 5,
		},
	],
};

export const FetchBooksListData = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_BOOKS_LIST:
			return {
				...state,
				category: action.category,
			};
		case types.FETCH_BOOKS_LIST_SUCCESS:
			return {
				...state,
				fetchedBooks: action.payload,
			};
		case types.FETCH_BOOKS_LIST_FAILURE:
			return {
				...state,
				error: 'Something working wrong!',
			};
		default:
			return state;
	}
};
