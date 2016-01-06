import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
	render () {
		return (
				<div className = {styles.content} >
					<h1 className = {styles.hello} >Hello World</h1>
				</div>
			);
	}
}