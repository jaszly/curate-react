import React from 'react'
import TopNav from './nav.jsx'
import axios from 'axios'
import {
	Jumbotron,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap'

class List extends React.Component {
	state = {
		features: [],
		listing: {
			title: '',
			description: '',
			city: '',
			neighborhood: '',
			price: null,
			images: [],
			features: []
		}
	}

	changeInput = (e, fieldName) => {
		e.preventDefault()
		let listing = this.state.listing
		listing[fieldName] = e.target.value
		this.setState({ listing })
		console.log({ listing })
	}

	createListing = e => {
		e.preventDefault()
		console.log('about to submit')
		axios
			.post(`${process.env.REACT_APP_API}/spaces`, this.state.listing, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then(res => {
				console.log({ res })
			})
			.catch(err => {
				console.log({ err })
			})
	}

	featureToggle = (e, feature) => {
		let listing = this.state.listing
		if (!this.state.listing.features.includes(feature)) {
			listing.features.push(feature)
			this.setState({ listing: listing })
		} else {
			listing.features = listing.features.filter(listingFeature => {
				return listingFeature._id != feature._id
			})
			this.setState({ listing: listing })
		}
	}

	componentWillMount() {
		let listing = this.state.listing
		axios
			.get(`${process.env.REACT_APP_API}/features`)
			.then(res => {
				console.log({ res })
				this.setState({ features: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<>
				<TopNav history={this.props.history} />
				<Jumbotron>
					<Form onSubmit={e => this.createListing(e)}>
						<FormGroup>
							<h1 className="display-3">List Your Space</h1>
							<p className="lead">the Basics</p>
							<Label for="exampleText">Title of Your Space</Label>
							<Input
								type="textarea"
								name="text"
								id="exampleText"
								placeholder="with a placeholder"
								value={this.state.listing.title}
								onChange={e => this.changeInput(e, 'title')}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="Text">Description for your Space</Label>
							<Input
								type="textarea"
								name="text"
								id="exampleText"
								value={this.state.listing.description}
								onChange={e => this.changeInput(e, 'description')}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleSelect">Where is your space located?</Label>
							<Input
								type="select"
								name="select"
								id="exampleSelect"
								value={this.state.listing.city}
								onChange={e => this.changeInput(e, 'city')}
							>
								<option>San Francisco Bay Area</option>
								<option>Greater Los Angeles</option>
								<option>Coachella Valley</option>
								<option>New York City</option>
								<option>Miami Beach</option>
								<option>Metro Atlanta Area</option>
							</Input>
						</FormGroup>

						<FormGroup>
							<Label for="Text">What neighborhood is your space in?</Label>
							<Input
								type="textarea"
								name="text"
								id="exampleText"
								value={this.state.listing.neighborhood}
								onChange={e => this.changeInput(e, 'neighborhood')}
							/>
						</FormGroup>

						<p className="lead">the Logistics</p>
						<FormGroup>
							<Label for="Text">How much per hour is your space? (USD)</Label>
							<Input
								type="number"
								id="exampleText"
								value={this.state.listing.price}
								onChange={e => this.changeInput(e, 'price')}
							/>
						</FormGroup>
						{'What features will you offer users who book your space?'}

						{this.state.features.map(feature => (
							<FormGroup check>
								<Label check>
									<Input
										type="checkbox"
										onChange={e => this.featureToggle(e, feature)}
									/>
									<i className={feature.icon}></i> {feature.description}
								</Label>
							</FormGroup>
						))}
						<div>
							<Button
								className="primary"
								style={{ width: '200px', marginTop: '40px ' }}
							>
								Submit for approval
							</Button>
						</div>
					</Form>
				</Jumbotron>
			</>
		)
	}
}

export default List
