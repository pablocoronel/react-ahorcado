import React, { useState } from 'react';
import './Keyboard.css';
import Context from './../../../context/context';

const letters = ['A', 'B', 'C'];
const initialKeys = [];

// set keyboard with letters
letters
	.map((letter, index) =>
		initialKeys.push({
			value: letter,
			disabled: false,
			order: index
		})
	)
	.sort((a, b) => a.order - b.order);

// component
const Keyboard = () => {
	const [keys, setKeys] = useState(initialKeys);

	const handleTouchedKey = (letter, contextFunction, chosenLetters) => {
		// no repeated letters
		if (chosenLetters.length > 0) {
			if (chosenLetters.some((item) => item === letter)) {
				return;
			}
		}

		const key = keys.find((key) => key.value === letter);
		key.disabled = true;

		const newKeys = keys.filter((key) => key.value !== letter);
		newKeys.push(key);
		newKeys.sort((a, b) => a.order - b.order);

		setKeys(newKeys);

		// context state
		const newChosenLetters = [...chosenLetters, letter];
		contextFunction(newChosenLetters);
	};

	return (
		<div id="container-keyboard">
			<Context.Consumer>
				{(context) =>
					keys.map((key) => (
						<div
							className={
								'key ' + (key.disabled ? 'disabledKey' : '')
							}
							key={'key-' + key.value}
							onClick={() =>
								handleTouchedKey(
									key.value,
									context.updateChosenLetters,
									context.state.chosenLetters
								)
							}
						>
							{key.value + '-' + key.disabled}
						</div>
					))
				}
			</Context.Consumer>
		</div>
	);
};

export default Keyboard;
