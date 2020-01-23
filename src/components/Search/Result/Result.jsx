import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = (props) => {
	if (props.artistName === '') {
		return null;
	}

	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="resultados">
				{props.artistName}

				<img src={props.artistImage} alt={props.artistName} />
				<Link to="/game">
					<Button variant="success" renderas="button">
						<span>Jugar!</span>
					</Button>
				</Link>
			</Col>
		</Row>
	);
};

export default Result;
