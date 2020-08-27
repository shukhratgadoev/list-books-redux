import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default ({ book }) => {
	return (
		<div>
			<Card style={{ width: '210px' }}>
				<Card.Img variant='top' src={book.image} />
				<Card.Body>
					<Card.Title>{book.bookName}</Card.Title>
					<Card.Text>{book.description}</Card.Text>
					<Button variant='primary'>Читать</Button>
				</Card.Body>
			</Card>
		</div>
	);
};
