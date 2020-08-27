import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Server } from 'miragejs';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import './index.css';
import App from './App';
import { rootReducer } from './lib/reducers';
import { sagaWatcher } from './lib/sagas/sagas';
import { Books } from './books';

const saga = createSagaMiddleware();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

saga.run(sagaWatcher);

new Server({
	routes() {
		this.namespace = '/api';

		this.get('/books', Books);

		this.get('/books/:category', (scheme, request) => {
			if (!request.params.category) {
				return Books;
			}
			return Books.filter((book) => book.category === request.params.category);
		});
	},
});

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
