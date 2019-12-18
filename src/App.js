import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Signup from './components/auth/signup'
import Spaces from './components/layout/spaces'
import Space from './components/layout/space'
import Profile from './components/layout/profile'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Msg from './components/layout/msg'
import Home from './components/layout/home'
import List from './components/layout/listSpace'
import Cities from './components/layout/cities'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/spaces/:id" component={Space} />
					<Route path="/spaces" component={Spaces} />
					<Route path="/cities" component={Cities} />
					<Route path="/profile" component={Profile} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/list-your-space" component={List} />
					<Route path="/msg" component={Msg} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default App
