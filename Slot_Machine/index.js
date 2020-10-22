
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machine</h1>
				<Machine s1='🍒' s2='🍊' s3='🍎'/>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
