import React from 'react';
import './App.css';
import Provider from '../../context/provider';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Search from './../Search/Search';
import Game from '../Game/Game';
// import NotFound from './../NotFound/NotFound';

const App = () => {
	return (
		<Provider>
			<Container fluid={true} bsPrefix="container">
				<Router>
					<Switch>
						<Route exact path="/">
							<Search />
						</Route>

						<Route path="/game">
							<Game />
						</Route>

						<Route path="*">{/* <NotFound /> */}</Route>
					</Switch>
				</Router>
			</Container>
		</Provider>
	);
};

export default App;
