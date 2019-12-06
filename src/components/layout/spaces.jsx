import React from 'react'
import Cards from './cards.jsx'
import TopNav from './nav'
import axios from 'axios'
import Search from './filters.jsx'

class Spaces extends React.Component {
	state = {
		spaces: [],
		initialSpaces: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:4000/spaces')
			.then(res => {
				console.log('res.data:', res.data)
				this.setState({
					spaces: res.data,
					initialSpaces: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	filterFunction = (e, city) => {
		console.log('city!!!', city)
		let spaces = this.state.initialSpaces
		console.log('starting spaces', spaces)
		spaces = spaces.filter(space => {
			console.log('space', space)
			return space.city === city
		})
		console.log(spaces)

		this.setState({ spaces: spaces })

		// 1. get initialSpaces from state
		// 2. filter state.initialSpaces and return only spaces where space.city is equal to city
		// 3. reset state of spaces
	}

	render() {
		return (
			<div>
				<TopNav filterFunction={this.filterFunction} />
				<div className="grid small five">
					{this.state.spaces.map((space, i) => (
						<Cards space={space} key={i} />
					))}
				</div>
			</div>
		)
	}
}

export default Spaces
