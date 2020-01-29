import React from 'react';
import './Word.css';
import Context from './../../../context/context';

const Word = () => {
	return (
		<Context.Consumer>
			{(context) => {
				const track = context.state.trackArtist;
				const words = track.toUpperCase().split(' ');
				let hiddenTrack = [];

				console.log(hiddenTrack);

				return (
					<div id="container-word">
						{words.map((word) => {
							return word
								.split('')
								.map((letter) => {
									hiddenTrack.push(letter);
									return '_'.concat(' ');
								})
								.concat('B');
						})}
					</div>
				);
			}}
		</Context.Consumer>
	);

	// <div>'so'</div>;
};

export default Word;
