import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { Jumbotron, Button, Col } from 'reactstrap'
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

					<p className="lead" style={{ fontFamily: 'Lato' }}>
						<i
							className="fas fa-map-marker-alt"
							style={{ color: '#f9a03f', marginRight: '8px' }}
						></i>
						{this.state.space.neighborhood} | {this.state.space.city}
					</p>

					<hr className="my-2" />

					<p className="lead" style={{ fontFamily: 'Abril Fatface' }}>
						About the Space:
					</p>
					<p className="lead" style={{ fontFamily: 'Lato' }}>
						Perfect for Weddings photos, product flat lays and more, book this
						beautiful bohemian space. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>

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
						<p className="lead" style={{ fontFamily: 'Abril Fatface' }}>
							Included In Your Booking:
						</p>
						<p className="lead" style={{ fontFamily: 'Lato' }}>
							<div className=" col ">
								<li>
									<i className="fas fa-fw fa-home"></i>
									type
								</li>
								<li>
									<i className="fas fa-fw fa-user-friends"></i>
									people
								</li>
								<li>
									<i className="fas fa-fw fa-bed"></i>
									wifi
								</li>
								<li>
									<i className="fas fa-fw fa-bath"></i>
									baths
								</li>
							</div>
						</p>
					</div>
					<Button className="secondary ">Book Me</Button>
				</Jumbotron>
			</>
		)
	}
}

export default withRouter(Space)
