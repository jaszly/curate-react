import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

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

				// this.setState({ space: res.data, largeImage: res.data.images[0] })
			})
			.catch(err => {
				console.log('ERROR', err)
			})
	}

	// clickedImage = image => {
	// 	this.setState({ largeImage: image })
	// }

	getClass = () => {
		return this.setState.liked ? 'fas fa-heart' : 'far fa-heart'
	}

	// toggleLike = () => {
	// 	this.setState({ liked: !this.state.liked })
	// }

	render() {
		return (
			<>
				<div className="gallery">
					<div
						className="image-main"
						style={{
							backgroundImage: `url('${this.state.largeImage}')`
						}}
					>
						<button className="icon" onClick={() => this.toggleLike()}>
							<i className={this.getClass()}></i>
						</button>
					</div>
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
				<div className="grid medium">
					<div className="grid sidebar-right">
						<div>
							<h1>{this.state.space.title}</h1>
							<small className="location">
								<i className="fas fa-map-pin" />
								<span>
									{this.state.space.neighborhood}{' '}
									<span className="city"> | {this.state.space.city}</span>
								</span>
							</small>

							<div>
								<div className="content"></div>
							</div>
							<p>this will be a description of the space</p>
							<h3>Features</h3>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										{this.state.space.features.map((feature, i) => {
											return (
												<li>
													<i className={feature.icon} key={i}></i>
													{feature.feature}
												</li>
											)
										})}
									</ul>
								</div>
							</div>
						</div>
						<div className="sidebar booking">
							<div className="card shadow">
								<div className="content large">
									<h3>
										${this.state.space.price}
										<small>per hour</small>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default withRouter(Space)
