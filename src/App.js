import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from "./components/header";
import SideBar from "./components/sidebar";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Route path="/" component={SideBar} />
					<Switch>
						<Route exact path={"/"} render={() => <div>Root</div>} />
						<Route exact path={"/vendors"} render={() => <div>Vendors</div>} />
						<Route exact path={"/items"} render={() => <div>Items</div>} />
						<Route exact path={"/contracts"} render={() => <div>Contracts</div>} />
						<Route exact path={"/invoices"} render={() => <div>Invoices</div>} />
						<Route exact path={"/containers"} render={() => <div>Containers</div>} />
						<Route exact path={"/shipments"} render={() => <div>Shipments</div>} />
						<Route exact path={"/payments"} render={() => <div>Payments</div>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
