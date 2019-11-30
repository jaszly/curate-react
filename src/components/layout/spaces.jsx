import React from 'react'
import Cards from './cards.jsx'
import axios from 'axios'

class Spaces extends React.Component {
	state = {
		spaces: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:4000/spaces')
			.then(res => {
				this.setState({ spaces: res.data, spacesSearch: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	// searchPlaces = (searchTerm) => {
	// 	{this.state.places.map((place, i) => (
	// 		return this.state.place.title ? searchTerm || this.state.place.type conntains searchTerm
	// 	))}
	// }

	render() {
		return (
			<div>
				<div className="grid five large">
					{this.state.spaces.map((space, i) => (
						<Cards space={space} />
					))}
				</div>
			</div>
		)
	}
}

export default Spaces
