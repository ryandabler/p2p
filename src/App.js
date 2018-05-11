import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import "./App.css";

import Header from "./components/header";
import SideBar from "./components/sidebar";
import MainContent from "./components/main-content";
import { getEntireDB } from "./indexeddb";
import { loadData } from "./actions";

class App extends Component {
	constructor(props) {
		super();
		this.props = props;
	}

	componentDidMount() {
		getEntireDB(this.props.loadData);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Route path="/:component" component={SideBar} />
					<Switch>
						<Route exact path={"/"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/vendors"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/items"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/contracts"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/invoices"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/containers"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/shipments"} render={props => <MainContent match={props.match} />} />
						<Route exact path={"/payments"} render={props => <MainContent match={props.match} />} />
					</Switch>
				</div>
			</Router>
		);
	}
}

App.propTypes = {
	loadData: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
	loadData: (data, store) => dispatch(loadData(data, store))
});

export default connect(null, mapDispatchToProps)(App);
