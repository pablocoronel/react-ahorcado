import React from 'react';
import './Person.css';
import Context from './../../../context/context';

const Person = () => {
	return (
		<div id="container-person">
			<Context.Consumer>
				{(context) => {
					return context.state.failedAttempts;
				}}
			</Context.Consumer>
			persona
			<img src="asdasd" alt="" />
		</div>
	);
};

export default Person;
