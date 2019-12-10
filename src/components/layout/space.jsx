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
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

class Space extends React.Component {
	state = {
		space: {
			images: [],
			features: [],
			host: { avatar: '', name: '', about: '' }
		},
		largeImage: '',
		startDate: null,
		startTime: null,
		endTime: null,
		visible: false,
		check: false
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

	show = () => {
		this.setState({
			visible: true
		})
	}

	hide = () => {
		this.setState({
			visible: false
		})
	}

	checkboxToggle = e => {
		this.setState({ check: true })
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
								<h1
									className="display-3"
									style={{ fontFamily: 'Abril Fatface' }}
								>
									{this.state.space.title}
								</h1>
								<p className="lead" style={{ marginBottom: '42px' }}>
									<i
										className="fas fa-map-marker-alt"
										style={{ marginRight: '6px' }}
									></i>
									{this.state.space.neighborhood} | {this.state.space.city}{' '}
								</p>
								<div className="card specs">
									<div className="content">
										<p className="lead" style={{ marginLeft: '25px' }}>
											Space Manager
										</p>

										<small>
											<span>
												<div className="user">
													<div
														className="avatar"
														style={{
															backgroundImage: `url('${this.state.space.host.avatar}')`
														}}
													></div>

													<div className="name">
														<span style={{ color: '#f9a03f' }}>
															{this.state.space.host.name}
														</span>
														<br />
														<span
															style={{
																fontSize: '15px',
																color: '#333',
																textAlign: 'center'
															}}
														>
															<span style={{ fontStyle: 'italic' }}>
																{this.state.space.host.about}
															</span>
														</span>
													</div>
												</div>
											</span>
										</small>
									</div>
								</div>
								<p
									className="lead"
									style={{ marginLeft: '25px', fontSize: '50px' }}
								>
									About
								</p>
								<p className="smallish">penthouse</p>

								<p className="lead" style={{ fontSize: '18px' }}>
									{this.state.space.description}
								</p>
								<p
									className="lead"
									style={{ marginLeft: '25px', fontSize: '50px' }}
								>
									Deets
								</p>
								<p className="lead" style={{ fontSize: '18px' }}>
									Rules: Donec mollis nunc ut mollis consectetur. Proin vel
									vehicula est. Quisque euismod ultricies lectus euismod
									suscipit. Maecenas et posuere dolor. Nullam mauris ante,
									faucibus nec vulputate vitae, volutpat nec libero. Nunc
									pellentesque in magna et rhoncus. Nunc nec augue convallis,
									pellentesque nunc eget, mollis justo. In rhoncus vulputate
									ante in efficitur. Integer turpis ligula, facilisis non
									facilisis at, sodales pellentesque quam. Fusce tristique eros
									mauris, sit amet semper odio ultricies id. Fusce sed eros
									arcu.
								</p>
								<p className="lead" style={{ fontSize: '18px' }}>
									Parking: Nunc nec augue convallis, pellentesque nunc eget,
									mollis justo.
								</p>

								<div className="card specs">
									<div className="content">
										<p className="lead" style={{ fontSize: '50px' }}>
											Features
										</p>

										<ul className="grid two">
											{this.state.space.features.map((feature, i) => {
												return (
													<li>
														<i
															className={feature.icon}
															key={i}
															style={{ width: '2px', marginRight: '18px' }}
														></i>
														<small
															style={{
																width: '2px',
																marginLeft: '10px',
																fontFamily: 'Open Sans',
																color: '#333'
															}}
														>
															{feature.displayText}
														</small>
													</li>
												)
											})}
										</ul>
									</div>
								</div>
							</div>

							<div>
								<div className="grid sidebar">
									<p className="lead" style={{ fontSize: '50px' }}>
										Start Booking
									</p>
									<form>
										<div className="group">
											<p className="lead">Date</p>
											<DatePicker
												selected={this.state.startDate}
												onChange={this.handleChange}
												placeholderText="choose a date"
												showDisabledMonthNavigation
											/>
											<p className="lead">Time</p>

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
									</form>
									<FormGroup>
										<p className="lead">Request</p>
										<small>
											Be sure to tell the host what you need the space for!
										</small>
										<Input type="textarea" name="text" id="exampleText" />
									</FormGroup>
									<button className="primary" onClick={this.show.bind(this)}>
										{' '}
										Request to Book
									</button>
								</div>
								<Rodal
									visible={this.state.visible}
									onClose={this.hide.bind(this)}
									width={400}
								>
									<div>
										<p className="lead" style={{ fontSize: '20px' }}>
											Please agree to Curate's Terms & Conditions Below:
										</p>

										<div>
											<p classname="lead" style={{ fontSize: '13px' }}>
												Guests may cancel their Booking between 30 days and 7
												days before the start time and receive a 50% refund
												(excluding Fees) of their Booking Price. Cancellations
												submitted less than 7 days before the Event start time
												are not refundable.
											</p>
										</div>
										<FormGroup check>
											<Label check>
												<Input
													type="checkbox"
													onChange={e => this.checkboxToggle(e)}
												/>
												<p className="lead" style={{ fontSize: '15px' }}>
													I agree to the terms and conditions{' '}
												</p>
											</Label>
										</FormGroup>
									</div>
									<button className="primary"> Send Request</button>
								</Rodal>
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
