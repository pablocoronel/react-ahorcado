import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Search from './../Search/Search';
// import { ResultSearch as Result } from './../ResultSearch/ResultSearch';
// import Game from '../Game/Game';
// import NotFound from './../NotFound/NotFound';

const App = () => {
	return (
		<Container fluid={true} bsPrefix="container">
			<Router>
				<Switch>
					<Route exact path="/">
						<Search />
					</Route>

					<Route path="/result">{/* <Result /> */}</Route>

					<Route path="/game">{/* <Game /> */}</Route>

					<Route path="*">{/* <NotFound /> */}</Route>
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
