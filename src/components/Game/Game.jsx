import React from 'react';
import Context from '../../context/context';
import { Row, Col } from 'react-bootstrap';
import './Game.css';

const Game = (props) => {
	return (
		<Context.Consumer>
			{(context) => {
				const track = context.state.trackArtist;
				const words = track.toUpperCase().split(' ');
				let hiddenTrack = [];

				console.log(hiddenTrack);

				return (
					<Row id="wrapper">
						<Col>{track}</Col>

						{words.map((word) => {
							return word
								.split('')
								.map((letter) => {
									hiddenTrack.push(letter);
									return '_'.concat(' ');
								})
								.concat('B');
						})}
					</Row>
				);
			}}
		</Context.Consumer>
	);
};

export default Game;
