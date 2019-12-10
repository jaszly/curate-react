import React from 'react'
import Cards from './cards.jsx'
import TopNav from './nav'
import axios from 'axios'
import Search from './filters.jsx'
import Header from './header'

class Spaces extends React.Component {
	state = {
		spaces: [{ title: '', neighborhood: '', city: '' }],
		initialSpaces: [],
		searchTerm: '',
		newSpaces: []
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

	searchSpaces = e => {
		console.log('searchTerm', e.target.value)
		// this.setState({ searchTerm: e.target.value })
		if (e.target.value === '') {
			console.log('it is empty')
			let spaces = this.state.initialSpaces
			this.setState({ spaces })
			console.log(spaces)
		} else {
			console.log('not empty')
			let filteredSpaces = this.state.initialSpaces.filter(space => {
				return (
					space.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
					space.neighborhood
						.toLowerCase()
						.includes(e.target.value.toLowerCase()) ||
					space.city.toLowerCase().includes(e.target.value.toLowerCase())
				)
				console.log('filtered spaces: ', filteredSpaces)
			})
			this.setState({ spaces: filteredSpaces })
		}
	}
	// let searchTerm = e.target.value
	// let results = spaces.filter(s => {
	// 	return (
	// 		s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
	// 		s.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
	// 		s.city.toLowerCase().includes(searchTerm.toLowerCase())
	// 	)
	// })
	// this.setState({ spaces: results })

	render() {
		return (
			<div>
				<TopNav
					filterFunction={this.filterFunction}
					history={this.props.history}
				/>
				<Header searchSpaces={this.searchSpaces} />
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
