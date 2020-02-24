import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Game.css';
import Person from './Person/Person';
import Word from './Word/Word';
import Keyboard from './Keyboard/Keyboard';

const Game = (props) => {
	return (
		<Row id="container-game">
			<Col xs={12} md={4}>
				<Person />
			</Col>

			<Col xs={12} md={8}>
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
	);
};

export default Game;
