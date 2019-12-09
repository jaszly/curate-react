import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

export default class Search extends React.Component {
	state = {
		initialSpaces: [],
		spaces: [],
		searchTerm: ''
	}

	// filterSpaces = event => {
	// 	let spaces = this.state.initialSpaces
	// 	spaces = spaces.filter(space => {
	// 		return space.toLowerCase().search(event.target.value.toLowerCase()) !== -1
	// 	})
	// 	this.setState({ spaces: spaces })
	// }

	searchSpaces = e => {
		console.log('searchTerm', e.target.value)
		this.setState({ searchTerm: e.target.value })
		let spaces = this.state.allSpaces
		let searchTerm = e.target.value
		let results = spaces.filter(s => {
			return (
				s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				s.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
				s.city.toLowerCase().includes(searchTerm.toLowerCase())
			)
		})
		this.setState({ spaces: results })
	}
	componentWillMount = () => {
		this.setState({
			initialSpaces: this.props.content,
			spaces: this.props.content
		})
	}

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						spaceholder="Search"
						onChange={this.filterSpaces}
					/>
				</form>
				<div>
					{this.state.spaces.map(space => {
						return <div key={space}>{space} </div>
					})}
				</div>
			</div>
		)
	}
}
