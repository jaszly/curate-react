import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import {
	Jumbotron,
	Button,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap'
import TopNav from './nav'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class Space extends React.Component {
	state = {
		space: {
			images: [],
			features: [],
			host: { avatar: '', name: '' }
		},
		largeImage: '',
		startDate: null,
		startTime: null,
		endTime: null
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

	handleChange = date => {
		this.setState({
			startDate: date
		})
	}

	setStartTime = time => {
		this.setState({
			startTime: time
		})
	}
	setEndTime = time => {
		this.setState({
			endTime: time
		})
	}

	render() {
		return (
			<>
				<TopNav />
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
				<Jumbotron>
					<div>
						<div className="grid sidebar-right">
							<div className="content">
								<h1>{this.state.space.title}</h1>
								<i className="fas fa-map-marker-alt"></i>
								{this.state.space.neighborhood}| {this.state.space.city}
								<div className="card specs">
									<div className="content">
										<small>
											<span>
												<div className="user">
													<div
														className="avatar"
														style={{
															backgroundImage: `url('${this.state.space.host.avatar}')`
														}}
														state
													></div>
													<div className="name">
														<small>Hosted by</small>
														<span>{this.state.space.host.name}</span>
													</div>
												</div>
											</span>
										</small>
									</div>
								</div>
								<p>{this.state.space.description}</p>
								<h3>Features</h3>
								<div className="card specs">
									<div className="content">
										<ul className="grid two">
											{this.state.space.features.map((feature, i) => {
												return (
													<li>
														<i className={feature.icon} key={i}></i>
														{feature.displayText}
													</li>
												)
											})}
										</ul>
									</div>
								</div>
							</div>
							<div className="sidebar center">
								<div className="card shadow">
									<div className="content large">
										<h3>
											<small>from</small> ${this.state.space.price}
											<small>per hour</small>
										</h3>
										<form className="cal">
											<div className="group">
												<h3>Date & Time</h3>
												<DatePicker
													selected={this.state.startDate}
													onChange={this.handleChange}
													placeholderText="choose a date"
													showDisabledMonthNavigation
												/>

												<DatePicker
													selected={this.state.startTime}
													onChange={time => this.setStartTime(time)}
													selectsStart
													startTime={this.state.startTime}
													endTime={this.state.endTime}
													showTimeSelect
													showTimeSelectOnly
													timeIntervals={15}
													timeCaption="Start Time"
													dateFormat="h:mm aa"
													placeholderText="start time"
													isClearable
												/>

												<DatePicker
													selected={this.state.endTime}
													onChange={time => this.setEndTime(time)}
													selectsEnd
													startTime={this.state.startTime}
													endTime={this.state.endTime}
													minTime={this.state.minTime}
													showTimeSelect
													showTimeSelectOnly
													timeIntervals={15}
													timeCaption="End Time"
													dateFormat="h:mm aa"
													placeholderText="estimated end time"
													isClearable
													showDisabledTimeNavigation
												/>
											</div>
											<FormGroup>
												<Label for="Text">Please Describe Your Request</Label>
												<small>
													Be sure to tell the host what you need the space for!
												</small>
												<Input type="textarea" name="text" id="exampleText" />
											</FormGroup>

											<div className="group">
												<button style={{ width: '200px', color: 'black' }}>
													{' '}
													Request to Book
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Jumbotron>
			</>
		)
	}
}
export default withRouter(Space)

// 	state = {
// 		space: {
// 			images: [],
// 			features: []
// 		},
// 		largeImage: ''
// 	}
//
// 	componentWillMount() {
// 		let spaceId = this.props.match.params.id
// 		let spaceURL = `http://localhost:4000/spaces/${spaceId}`
// 		axios
// 			.get(spaceURL)
// 			.then(res => {
// 				console.log('DATA:', res.data)
// 				this.setState({ space: res.data, largeImage: res.data.images[0] })
// 			})
// 			.catch(err => {
// 				console.log('ERROR', err)
// 			})
// 	}
//
// 	clickedImage = image => {
// 		this.setState({ largeImage: image })
// 	}
//
// 	render() {
// 		return (
// 			<>
// 				<TopNav />
// 				<div className="bp-grid signup-img">
// 					<h1 className="display-3" style={{ fontFamily: 'Abril Fatface' }}>
// 						{this.state.space.title}
// 					</h1>
//
// 					<p className="lead" style={{ fontFamily: 'Lato' }}>
// 						<i
// 							className="fas fa-map-marker-alt"
// 							style={{ color: '#f9a03f', marginRight: '8px' }}
// 						></i>
// 						{this.state.space.neighborhood} | {this.state.space.city}
// 					</p>
// 					<hr className="my-2" />
// 					<div className="gallery">
// 						<div
// 							className="image-main"
// 							style={{
// 								backgroundImage: `url('${this.state.largeImage}')`
// 							}}
// 						></div>
// 						<div className="thumbnails">
// 							{this.state.space.images.map((image, i) => {
// 								return (
// 									<div
// 										className="thumbnail"
// 										style={{
// 											backgroundImage: `url('${image}')`
// 										}}
// 										key={i}
// 										onClick={() => this.clickedImage(image)}
// 									></div>
// 								)
// 							})}
// 						</div>
// 					</div>
// 				</div>
// 				<div className="bp-grid signup-form">
// 					<form>
// 						<button>okurrrrrr</button>
// 						<p>stuff and things</p>
// 					</form>
// 				</div>
//
// 				<p className="lead" style={{ fontFamily: 'Lato', fontSize: '25px' }}>
// 					About the Space:
// 				</p>
// 				<p className="lead" style={{ fontFamily: 'Lato' }}>
// 					Perfect for Weddings photos, product flat lays and more, book this
// 					beautiful bohemian space. Lorem ipsum dolor sit amet, consectetur
// 					adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
// 					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
// 					ullamco laboris nisi ut aliquip ex ea commodo consequat.
// 				</p>
//
// 				<p className="lead" style={{ fontFamily: 'Lato', fontSize: '25px' }}>
// 					Included In Your Booking:
// 				</p>
// 				<p className="lead" style={{ fontFamily: 'Lato' }}>
// 					<div className=" col ">
// 						<ul className="grid two">
// 							{this.state.space.features.map((feature, i) => {
// 								return (
// 									<li>
// 										<i className={feature.icon} key={i}></i>
// 										{feature.displayText}
// 									</li>
// 								)
// 							})}
// 						</ul>
// 					</div>
// 				</p>
//
// 				<Button
// 					className="primary"
// 					style={{ width: '200px', marginTop: '40px ' }}
// 				>
// 					Book Me
// 				</Button>
// 			</>
// 		)
// 	}
// }

// export default withRouter(Space)
