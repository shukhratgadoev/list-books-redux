import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import { Loader } from './Loader';
import { defaultBooksList } from '../lib/actions/booksList/actions';

export default () => {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.books.fetchedBooks);
	const loading = useSelector((state) => state.app.loading);

	useEffect(() => {
		dispatch(defaultBooksList());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (loading) {
		return <Loader />;
	}

	if (books.length > 0) {
		return books.map((book) => <Book key={book.id} book={book} />);
	} else {
		return (
			<p>
				Нет книг
				<span role='img' aria-label='jsx-a11y/aria-proptypes'>
					😢
				</span>
			</p>
		);
	}
};
