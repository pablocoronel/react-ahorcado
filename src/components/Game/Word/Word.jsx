import React from 'react';
import './Word.css';
import Context from './../../../context/context';

const Word = () => {
	return (
		<Context.Consumer>
			{(context) => {
				const track = context.state.trackArtist;
				const words = track.toUpperCase().split(' ');
				const chosenLetters = context.state.chosenLetters;

				console.log(context.state.trackArtist);
				console.log(chosenLetters);
				return (
					<div id="container-word">
						{words.map((word) => {
							return word
								.split('')
								.map((letter) => {
									if (
										chosenLetters.some(
											(item) => item === letter
										)
									) {
										return letter;
									} else {
										return '_'.concat(' ');
									}
								})
								.concat(' ');
						})}
					</div>
				);
			}}
		</Context.Consumer>
	);

	// <div>'so'</div>;
};

export default Word;
