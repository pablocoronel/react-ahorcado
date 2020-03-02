import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
	return (
		<Container fluid={true} id="container-not-found">
			<div>
				<Button variant="primary" href="/">
					Ir al inicio
				</Button>
			</div>
		</Container>
	);
};

export default NotFound;
