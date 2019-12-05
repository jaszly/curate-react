import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Search extends React.Component {
	state = {
		initialSpaces: [],
		spaces: []
	}
	filterSpaces = event => {
		let spaces = this.state.initialSpaces
		spaces = spaces.filter(space => {
			return space.toLowerCase().search(event.target.value.toLowerCase()) !== -1
		})
		this.setState({ spaces: spaces })
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
				<div>
					{this.state.spaces.map(space => {
						return <div key={space}>{space} </div>
					})}
				</div>
			</div>
		)
	}
}

export default Search
