import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
