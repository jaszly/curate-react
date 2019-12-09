import React from 'react'
import TopNav from './nav.jsx'
import axios from 'axios'

class List extends React.Component {
	state = {
		listing: {
			title: '',
			description: '',
			city: '',
			country: '',
			price: null,
			types: [],
			images: [],
			features: [],
			guests: []
		}
	}

	changeInput = (e, fieldName) => {
		e.preventDefault()
		let listing = this.state.listing
		listing[fieldName] = e.target.value
		this.setState({ listing })
	}

	createListing = e => {
		e.preventDefault()
		axios
			.post('/localhost:4000/spaces', this.state.listing)
			.then(res => {
				console.log({ res })
			})
			.catch(err => {
				console.log(err)
			})
	}

	componentWillMount() {
		let listing = this.state.listing
		axios
			.get('/localhost:4000/spaces/features')
			.then(res => {
				listing.features = res.data
				this.setState({ listing })
			})
			.catch(err => {
				console.log(err)
			})

		let type = this.state.type
		axios
			.get('/localhost:4000/spaces/types')
			.then(res => {
				listing.types = res.data
				this.setState({ type })
			})
			.catch(err => {
				console.log({ err })
			})
	}

	render() {
		return (
			<>
				<TopNav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<div className="sidebar">
							<ul>
								<li className>
									<a href="profile">Profile</a>
								</li>
								<li className>
									<a href="bookings">Bookings</a>
								</li>
								<li className>
									<a href="favorites">Favorites</a>
								</li>
								<li className="active">
									<a href="host">Host</a>
								</li>
							</ul>
						</div>
						<div className="content">
							<h2>Add a Listing </h2>
							<form>
								<div className="group">
									<label>Title</label>
									<input
										type="text"
										value={this.state.listing.title}
										onChange={e => this.changeInput(e, 'title')}
									/>
								</div>
								<div className="group">
									<label>Description</label>
									<textarea />
								</div>
								<div className="group">
									<label>City or Town</label>
									<input
										type="text"
										value={this.state.listing.city}
										onChange={e => this.changeInput(e, 'city')}
									/>
								</div>
								<div className="group">
									<label>Country</label>
									<input
										type="text"
										value={this.state.listing.country}
										onChange={e => this.changeInput(e, 'country')}
									/>
								</div>
								<div className="group">
									<label>Price per Night (USD)</label>
									<input
										type="number"
										value={this.state.listing.price}
										onChange={e => this.changeInput(e, 'price')}
									/>
								</div>
								<div className="group">
									<label>Type</label>
									<select>
										{this.state.listing.types.map((types, i) => (
											<option key={i}>{types.name}</option>
										))}
									</select>
								</div>
								<div className="group">
									<label>Number of Rooms</label>
									<input
										type="number"
										min="1"
										value={this.state.listing.bedrooms}
										onChange={e => this.changeInput(e, 'bedrooms')}
									/>
								</div>
								<div className="group">
									<label>Number of Bathrooms</label>
									<input
										type="number"
										min="1"
										value={this.state.listing.bathrooms}
										onChange={e => this.changeInput(e, 'bathrooms')}
									/>
								</div>
								<div className="group"></div>
								<div className="group">
									<label>Upload Photos</label>
									<input type="file" multiple />
								</div>
								<div className="group">
									<label>Amenities</label>
									{this.state.listing.features.map(amenity => (
										<label className="checkbox">
											<input type="checkbox" />
											{amenity.name}
										</label>
									))}
								</div>
								<button className="primary">Publish this Space</button>
								<button className="cancel" onClick="/host">
									<i className="fas fa-times" />
								</button>
							</form>
						</div>
					</div>
				</div>
				;
			</>
		)
	}
} //react component {}

export default List
