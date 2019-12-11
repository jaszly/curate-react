import React from 'react'
import CityCards from './city-cards.jsx'
import TopNav from './nav'
import axios from 'axios'
import Search from './filters.jsx'
import Header from './header'

class Cities extends React.Component {
	state = {
		cities: [{ name: '', state: '' }]
	}

	componentWillMount() {
		axios
			.get(`${process.env.REACT_APP_API}/cities`)
			.then(res => {
				console.log('res.data:', res.data)
				this.setState({
					cities: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<TopNav />
				<Header />
				<div className="grid tiny">
					<h1 className="display-3"> Our Cities:</h1>
					<br />
					{this.state.cities.map((city, i) => (
						<CityCards city={city} key={i} />
					))}
				</div>
			</div>
		)
	}
}

export default Cities
