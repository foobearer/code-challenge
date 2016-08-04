var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;
var styles = require('../styles/index.js');

var Input = React.createClass({
	getInitialState: function () {
		return {text: ''};
	},
	onKeyUp: function () {

	},
	render: function () {
		return (
			<input type="text" id="ptext" style={styles.inputBox} name="add-project" placeholder="Enter Project Name"/>
		)
	}
});

var Main = React.createClass({
	render: function () {
		return (
				<div style={styles.mainBox}>
					<Input />
					<div className="container" style={styles.container}>
						<div id="todo" className="box" style={styles.box}><h4 style={styles.header}>To Do</h4></div>
						<div id="in-progress" className="box" style={styles.box}><h4 style={styles.header}>In Progress</h4></div>
						<div id="done" className="box" style={styles.box}><h4 style={styles.header}>Done</h4></div>
					</div>
				</div>	
		)
	}
});

module.exports = Main;