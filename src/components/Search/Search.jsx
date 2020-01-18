import React, { useState } from 'react';
import './Search.css';
import { Row, Col, Form } from 'react-bootstrap';

const Search = () => {
	const [artista, setArtista] = useState('nada');

	const handleSubmit = (e) => {
		setArtista(e.target.value);
	};

	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="formulario">
				<h1>Buscar un artista</h1>
				<b>{artista}</b>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Control
							type="text"
							placeholder="Rolling stones"
						/>
					</Form.Group>
				</Form>
			</Col>
		</Row>
	);
};

export default Search;
