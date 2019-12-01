import React from 'react'
import Cards from './cards.jsx'
import Header from './header.jsx'
import axios from 'axios'

class Spaces extends React.Component {
	state = {
		spaces: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:4000/spaces')
			.then(res => {
				console.log('res.data:', res.data)
				this.setState({ spaces: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<Header />
				<div className="grid five large">
					{this.state.spaces.map((space, i) => (
						<Cards space={space} key={i} />
					))}
				</div>
			</div>
		)
	}
}

export default Spaces
