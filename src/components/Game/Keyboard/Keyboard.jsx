import React, { useState } from 'react';
import './Keyboard.css';

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

	const handleTouchedKey = (letter) => {
		const key = keys.find((key) => key.value === letter);
		key.disabled = true;

		const newKeys = keys.filter((key) => key.value !== letter);
		newKeys.push(key);
		newKeys.sort((a, b) => a.order - b.order);

		setKeys(newKeys);
	};

	return (
		<div id="container-keyboard">
			{keys.map((key) => {
				return (
					<div
						className={'key ' + (key.disabled ? 'disabledKey' : '')}
						key={'key-' + key.value}
						onClick={() => handleTouchedKey(key.value)}
					>
						{key.value + '-' + key.disabled}
					</div>
				);
			})}
		</div>
	);
};

export default Keyboard;
