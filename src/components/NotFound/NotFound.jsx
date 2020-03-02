import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
	return (
		<Container fluid={true} id="container-not-found">
			<div>
				<Link
					className="btn btn-primary"
					to={{
						pathname: '/'
					}}
				>
					Ir al inicio
				</Link>
			</div>
		</Container>
	);
};

export default NotFound;
