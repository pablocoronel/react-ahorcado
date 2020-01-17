import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Search />
				</Route>

				<Route path="/result">
					<Result />
				</Route>

				<Route path="/game">
					<Game />
				</Route>

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
