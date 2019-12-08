import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { Jumbotron, Button } from 'reactstrap'
import TopNav from './nav'

class Space extends React.Component {
	state = {
		space: {
			images: [],
			features: []
		},
		largeImage: ''
	}

	componentWillMount() {
		let spaceId = this.props.match.params.id
		let spaceURL = `http://localhost:4000/spaces/${spaceId}`
		axios
			.get(spaceURL)
			.then(res => {
				console.log('DATA:', res.data)
				this.setState({ space: res.data, largeImage: res.data.images[0] })
			})
			.catch(err => {
				console.log('ERROR', err)
			})
	}

	clickedImage = image => {
		this.setState({ largeImage: image })
	}

	render() {
		return (
			<>
				<TopNav />
				<Jumbotron>
					<h1 className="display-3" style={{ fontFamily: 'Abril Fatface' }}>
						{this.state.space.title}
					</h1>
					<p className="lead">
						{this.state.space.neighborhood} | {this.state.space.city}
					</p>
					<hr className="my-2" />
					<p>Book from ${this.state.space.price} per hour</p>

					<div className="gallery">
						<div
							className="image-main"
							style={{
								backgroundImage: `url('${this.state.largeImage}')`
							}}
						></div>
						<div className="thumbnails">
							{this.state.space.images.map((image, i) => {
								return (
									<div
										className="thumbnail"
										style={{
											backgroundImage: `url('${image}')`
										}}
										key={i}
										onClick={() => this.clickedImage(image)}
									></div>
								)
							})}
						</div>
					</div>
					<Button className="primary">Book Me</Button>
				</Jumbotron>
			</>
		)
	}
}

export default withRouter(Space)
