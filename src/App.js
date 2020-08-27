import React from 'react';
import { Row, Col, Container, CardDeck } from 'react-bootstrap';

import FetchedBooks from './component/FetchedBooks';
import { Menu } from './component/Menu';

function App() {
	return (
		<div style={{ margin: 40, display: 'flex' }}>
			<Row>
				<Col>
					<h2>Книги</h2>
					<Menu />
				</Col>
			</Row>
			<Container>
				<CardDeck>
					<FetchedBooks />
				</CardDeck>
			</Container>
		</div>
	);
}

export default App;
