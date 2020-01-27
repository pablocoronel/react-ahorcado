import React from 'react';
import Context from '../../context/context';
import { Row, Col } from 'react-bootstrap';
import './Game.css';

const Game = (props) => {
	return (
		<Context.Consumer>
			{(context) => {
				console.log(context);
				return (
					<Row id="wrapper">
						<Col>{context.state.idArtist}</Col>
						<Col>{context.state.trackArtist}</Col>
					</Row>
				);
			}}
		</Context.Consumer>
	);
};

export default Game;
