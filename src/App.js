import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Signup from './components/auth/signup'
import Spaces from './components/layout/spaces'
import Space from './components/layout/space'
import Profile from './components/layout/profile'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Modal from './components/layout/modal'
import Home from './components/layout/home'
import List from './components/layout/listSpace'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/spaces/:id" component={Space} />
					<Route path="/spaces" component={Spaces} />
					<Route path="/profile" component={Profile} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/list-your-space" component={List} />

					<Route path="/modal" component={Modal} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default App
