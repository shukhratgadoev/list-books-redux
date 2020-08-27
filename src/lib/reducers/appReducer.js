import * as types from '../actionTypes/types';

const initialState = {
	loading: false,
	alert: null,
};

export const appReduser = (state = initialState, action) => {
	switch (action.type) {
		case types.SHOW_LOADER:
			return { ...state, loading: true };
		case types.HIDE_LOADER:
			return { ...state, loading: false };
		case types.SHOW_ALERT:
			return { ...state, alert: action.payload };
		case types.HIDE_ALERT:
			return { ...state, alert: null };
		default:
			return state;
	}
};
