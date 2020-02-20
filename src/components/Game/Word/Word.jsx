import React from 'react';
import './Word.css';
import Context from './../../../context/context';

const Word = () => {
	return (
		<Context.Consumer>
			{(context) => {
				const words = context.state.trackArtist
					.toUpperCase()
					.split(' ');
				const chosenLetters = context.state.chosenLetters;

				return (
					<div id="container-word">
						<div id="container-postit">
							<div id="text-postit">
								{context.state.nameArtist}
							</div>
						</div>

						{words.map((word) =>
							word
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
								.concat(' ')
						)}
					</div>
				);
			}}
		</Context.Consumer>
	);

	// <div>'so'</div>;
};

export default Word;
