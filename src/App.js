import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Signup from './components/auth/signup'
import Spaces from './components/layout/spaces'
import Space from './components/layout/space'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/spaces/:id" component={Space} />
					<Route path="/spaces" component={Spaces} />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default App
