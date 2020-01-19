import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Result.css';

const Result = (props) => {
	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="resultados">
				{props.artist}
			</Col>
		</Row>
	);
};

export default Result;
