import React from 'react';
import './App.css';
import Provider from '../../context/provider';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Search from './../Search/Search';
import Game from '../Game/Game';
import NotFound from './../NotFound/NotFound';

const App = () => {
	return (
		<Provider>
			<Router basename="/ahorcado">
				<Switch>
					<Route path="/" exact component={Search} />
					<Route path="/game" exact component={Game} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
