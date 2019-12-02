import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Space extends React.Component {
	state = {
		space: {
			images: [],
			features: []
		}
	}

	componentWillMount() {
		let spaceId = this.props.match.params.id
		let spaceURL = `http://localhost:4000/spaces/${spaceId}`
		axios
			.get(spaceURL)
			.then(res => {
				this.setState({ space: res.data })
				console.log('DATA:', res.data)

				// this.setState({ space: res.data, largeImage: res.data.images[0] })
			})
			.catch(err => {
				console.log('ERROR', err)
			})
	}

	// slideIndex = 1;
	// 	showDivs(slideIndex);
	//
	// plusDivs = n => {
	// 	  showDivs(slideIndex += n);
	// 	}
	//
	// currentDiv = (n) => {
	// 	  showDivs(slideIndex = n);
	// 	}

	// showDivs = n => {
	// 	let i
	// 	let x = document.getElementsByClassName('mySlides')
	// 	let dots = document.getElementsByClassName('demo')
	// 	if (n > x.length) {
	// 		slideIndex = 1
	// 	}
	// 	if (n < 1) {
	// 		slideIndex = x.length
	// 	}
	// 	for (i = 0; i < x.length; i++) {
	// 		x[i].style.display = 'none'
	// 	}
	// 	for (i = 0; i < dots.length; i++) {
	// 		dots[i].className = dots[i].className.replace(' w3-opacity-off', '')
	// 	}
	// 	x[slideIndex - 1].style.display = 'block'
	// 	dots[slideIndex - 1].className += ' w3-opacity-off'
	// }

	// clickedImage = image => {
	// 	this.setState({ largeImage: image })
	// }

	// getClass = () => {
	// 	return this.setState.liked ? 'fas fa-heart' : 'far fa-heart'
	// }

	// toggleLike = () => {
	// 	this.setState({ liked: !this.state.liked })
	// }

	render() {
		return (
			<>
				<div className="w3-content w3-border-left w3-border-right">
					<nav
						className="w3-sidebar w3-light-grey w3-collapse w3-top"
						style={{ zIndex: 3, width: 260 }}
						id="mySidebar"
					>
						<div className="w3-container w3-display-container w3-padding-16">
							<i
								onclick="w3_close()"
								className="fa fa-remove w3-hide-large w3-button w3-transparent w3-display-topright"
							/>
							<h3>Book from</h3>
							<h3>${this.state.space.price}</h3>
							<h6>per hour</h6>
							<hr />
							<form action="/action_page.php" target="_blank">
								<p>
									<label>
										<i className="fa fa-calendar-check-o" /> Check In
									</label>
								</p>
								<input
									className="w3-input w3-border"
									type="text"
									placeholder="DD MM YYYY"
									name="CheckIn"
									required
								/>
								<p>
									<label>
										<i className="fa fa-calendar-o" /> Check Out
									</label>
								</p>
								<input
									className="w3-input w3-border"
									type="text"
									placeholder="DD MM YYYY"
									name="CheckOut"
									required
								/>
								<p>
									<label>
										<i className="fa fa-male" /> Adults
									</label>
								</p>
								<input
									className="w3-input w3-border"
									type="number"
									defaultValue={1}
									name="Adults"
									min={1}
									max={6}
								/>
								<p>
									<label>
										<i className="fa fa-child" /> Kids
									</label>
								</p>
								<input
									className="w3-input w3-border"
									type="number"
									defaultValue={0}
									name="Kids"
									min={0}
									max={6}
								/>
								<p>
									<button
										className="w3-button w3-block w3-green w3-left-align"
										type="submit"
									>
										<i className="fa fa-search w3-margin-right" /> Search
										availability
									</button>
								</p>
							</form>
						</div>
					</nav>
					;
					<div className="w3-main w3-white" style={{ marginLeft: '260px' }}>
						{/* Slideshow Header */}
						<div className="w3-container" id="apartment">
							<h2>{this.state.space.title}</h2>
							<div className="w3-display-container mySlides">
								<img
									src="/w3images/livingroom.jpg"
									style={{ width: '100%', marginBottom: '-6px' }}
								/>
								<div className="w3-display-bottomleft w3-container w3-black">
									<p>Living Room</p>
								</div>
							</div>
							<div className="w3-display-container mySlides">
								<img
									src="/w3images/diningroom.jpg"
									style={{ width: '100%', marginBottom: '-6px' }}
								/>
								<div className="w3-display-bottomleft w3-container w3-black">
									<p>Dining Room</p>
								</div>
							</div>
							<div className="w3-display-container mySlides">
								<img
									src="/w3images/bedroom.jpg"
									style={{ width: '100%', marginBottom: '-6px' }}
								/>
								<div className="w3-display-bottomleft w3-container w3-black">
									<p>Bedroom</p>
								</div>
							</div>
							<div className="w3-display-container mySlides">
								<img
									src="/w3images/livingroom2.jpg"
									style={{ width: '100%', marginBottom: '-6px' }}
								/>
								<div className="w3-display-bottomleft w3-container w3-black">
									<p>Living Room II</p>
								</div>
							</div>
						</div>
						<div className="w3-row-padding w3-section">
							<div className="w3-col s3">
								<img
									className="demo w3-opacity w3-hover-opacity-off"
									src="/w3images/livingroom.jpg"
									style={{ width: '100%', cursor: 'pointer' }}
									onclick="currentDiv(1)"
									title="Living room"
								/>
							</div>
							<div className="w3-col s3">
								<img
									className="demo w3-opacity w3-hover-opacity-off"
									src="/w3images/diningroom.jpg"
									style={{ width: '100%', cursor: 'pointer' }}
									onclick="currentDiv(2)"
									title="Dining room"
								/>
							</div>
							<div className="w3-col s3">
								<img
									className="demo w3-opacity w3-hover-opacity-off"
									src="/w3images/bedroom.jpg"
									style={{ width: '100%', cursor: 'pointer' }}
									onclick="currentDiv(3)"
									title="Bedroom"
								/>
							</div>
							<div className="w3-col s3">
								<img
									className="demo w3-opacity w3-hover-opacity-off"
									src="/w3images/livingroom2.jpg"
									style={{ width: '100%', cursor: 'pointer' }}
									onclick="currentDiv(4)"
									title="Second Living Room"
								/>
							</div>
						</div>
						<div className="w3-container">
							<h4>
								<strong>The space</strong>
							</h4>
							<div className="w3-row w3-large">
								<div className="w3-col s6">
									<p>
										<i className="fa fa-fw fa-male" /> City:{' '}
										{this.state.space.city}
									</p>
									<p>
										<i className="fa fa-fw fa-bath" /> Bathrooms: 2
									</p>
									<p>
										<i className="fa fa-fw fa-bed" /> Bedrooms: 1
									</p>
								</div>
								<div className="w3-col s6">
									<p>
										<i className="fa fa-fw fa-clock-o" /> Check In: After 3PM
									</p>
									<p>
										<i className="fa fa-fw fa-clock-o" /> Check Out: 12PM
									</p>
								</div>
							</div>
							<hr />
							<h4>
								<strong>Features:</strong>
							</h4>
							<div className="w3-row w3-large">
								<div className="w3-col s6">{this.state.space.city}</div>
							</div>

							<hr />
							<h4>
								<strong>Extra Info</strong>
							</h4>
							<p>
								Our apartment is really clean and we like to keep it that way.
								Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>

							<hr />
							<h4>
								<strong>Rules</strong>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<p>
								Subscribe to receive updates on available dates and special
								offers.
							</p>
							<p>
								<button
									className="w3-button w3-green w3-third"
									onclick="document.getElementById('subscribe').style.display='block'"
								>
									Subscribe
								</button>
							</p>
						</div>
						<hr />
					</div>
				</div>
			</>
		)
	}
}

// 	render() {
// 		return (
// 			<>
// 				<div className="gallery">
// 					<div
// 						className="image-main"
// 						style={{
// 							backgroundImage: `url('${this.state.largeImage}')`
// 						}}
// 					>
// 						<button className="icon" onClick={() => this.toggleLike()}>
// 							<i className={this.getClass()}></i>
// 						</button>
// 					</div>
// 					<div className="thumbnails">
// 						{this.state.space.images.map((image, i) => {
// 							return (
// 								<div
// 									className="thumbnail"
// 									style={{
// 										backgroundImage: `url('${image}')`
// 									}}
// 									key={i}
// 									onClick={() => this.clickedImage(image)}
// 								></div>
// 							)
// 						})}
// 					</div>
// 				</div>
// 				<div className="grid medium">
// 					<div className="grid sidebar-right">
// 						<div className="content">
// 							<h1>{this.state.space.title}</h1>
// 							<small>
// 								<i className="fas fa-map-marker-alt"></i>
// 								<span>
// 									{this.state.space.neighborhood}, {this.state.space.city}
// 								</span>
// 							</small>
//
// 							<div className="card specs">
// 								<div className="content">
// 									<ul className="grid two">
// 										<li>
// 											<i className="fas fa-fw fa-home"></i>
// 											warehouse
// 										</li>
// 										<li>
// 											<i className="fas fa-fw fa-bed"></i>
// 											item 1
// 										</li>
// 										<li>
// 											<i className="fas fa-fw fa-bath"></i>
// 											item other
// 										</li>
// 									</ul>
// 								</div>
// 							</div>
// 							<p>this will be a description of the space</p>
// 							<h3>Features</h3>
// 							<div className="card specs">
// 								<div className="content">
// 									<ul className="grid two">
// 										{this.state.space.features.map((feature, i) => {
// 											return (
// 												<li>
// 													<i className={feature.icon} key={i}></i>
// 													{feature.feature}
// 												</li>
// 											)
// 										})}
// 									</ul>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="sidebar booking">
// 							<div className="card shadow">
// 								<div className="content large">
// 									<h3>
// 										${this.state.space.price}
// 										<small>per hour</small>
// 									</h3>
// 									<small>
// 										<i className="fas fa-star"></i>
// 										<i className="fas fa-star"></i>
// 										<i className="fas fa-star"></i>
// 										<i className="fas fa-star"></i>
// 										<i className="fas fa-star"></i>
// 									</small>
// 									<form className="small">
// 										<div className="group">
// 											<label>Booking</label>
// 											<input type="text" spaceholder="Book-Time" />
// 											<input type="text" spaceholder="Book Date" />
// 										</div>
//
// 										<div className="group">
// 											<button className="secondary full">
// 												Book this space
// 											</button>
// 										</div>
// 									</form>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				//{' '}
// 			</>
// 		)
// 	}
// }

export default Space
