import React from 'react'
import Header from './header'
import TopNav from './nav'
import axios from 'axios'
import Search from './filters.jsx'
import { Container, Row, Col } from 'reactstrap'

class Home extends React.Component {
	componentWillMount() {
		axios
			.get('http://localhost:4000/')
			.then(res => {
				console.log('res.data:', res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<Header />
				<h2>how it works</h2>
			</div>
		)
	}
}

export default Home
