import * as types from '../../actionTypes/types';

export const defaultBooksList = () => ({
	type: types.DEFAULT_BOOKS_LIST,
});
export const fetchBooksList = (category) => ({
	category,
	type: types.FETCH_BOOKS_LIST,
});

export const fetchBooksListSuccess = (payload) => ({
	payload,
	type: types.FETCH_BOOKS_LIST_SUCCESS,
});

export const fetchBooksListFailure = (payload) => ({
	payload,
	type: types.FETCH_BOOKS_LIST_FAILURE,
});

export const showLoader = () => {
	return {
		type: types.SHOW_LOADER,
	};
};

export const hideLoader = () => {
	return {
		type: types.HIDE_LOADER,
	};
};

export const showAlert = (text) => {
	return (dispatch) => {
		dispatch({
			type: types.SHOW_ALERT,
			payload: text,
		});

		setTimeout(() => {
			dispatch(hideAlert());
		}, 3000);
	};
};

export const hideAlert = () => {
	return {
		type: types.HIDE_ALERT,
	};
};
