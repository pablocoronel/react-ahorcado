import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Game.css';
import Person from './Person/Person';
import Word from './Word/Word';
import Keyboard from './Keyboard/Keyboard';

const Game = (props) => {
	return (
		<Container fluid={true}>
			<Row id="container-game">
				<Col xs={12} sm={4} md={4}>
					<Person />
				</Col>

				<Col xs={12} sm={8} md={8} id="container-game-panel">
					<Row>
						<Col>
							<Word />
						</Col>
					</Row>
					<Row>
						<Col>
							<Keyboard />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Game;
