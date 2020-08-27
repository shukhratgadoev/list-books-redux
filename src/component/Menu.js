import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import { fetchBooksList } from '../lib/actions/booksList/actions';

export const Menu = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.books.categories);

	return (
		<ListGroup style={{ minWidth: 215 }}>
			{categories.map((category) => (
				<ListGroup.Item
					key={category.id}
					onClick={() => {
						dispatch(fetchBooksList(category.alias));
					}}>
					{category.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};
