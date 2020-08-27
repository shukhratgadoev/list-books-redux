import { takeEvery, put, call } from 'redux-saga/effects';

import * as types from '../actionTypes/types';
import {
	showLoader,
	hideLoader,
	showAlert,
} from '../actions/booksList/actions';

export function* sagaWatcher() {
	yield takeEvery(types.DEFAULT_BOOKS_LIST, sagaWorker);
	yield takeEvery(types.FETCH_BOOKS_LIST, sagaWorker);
}

function* sagaWorker({ ...props }) {
	try {
		yield put(showLoader());
		const payload = yield call(fetchBooks, props.category);
		yield put({ type: types.FETCH_BOOKS_LIST_SUCCESS, payload });
		yield put(hideLoader());
	} catch (e) {
		yield put(showAlert('Something working wrong!'));
		yield put(hideLoader());
	}
}

async function fetchBooks(category) {
	const url = category ? `/api/books/${category}` : `/api/books`;
	const response = await fetch(url);
	return await response.json();
}
