import React, { useState } from 'react'
import axios from 'axios'

import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Jumbotron,
	Media
} from 'reactstrap'

import classnames from 'classnames'
import TopNav from './nav'

// const Profile = props => {
class Profile extends React.Component {
	componentWillMount() {
		axios
			.get('http://localhost:4000/auth', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then(res => {
				console.log('RESSSS', res)
				console.log({ profile: res.data })
				this.setState({
					profile: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	// const [activeTab, setActiveTab] = useState('1')
	state = {
		activeTab: '1',
		profile: {
			name: '',
			email: '',
			avatar: ''
		}
	}

	setActiveTab = tab => {
		this.setState({
			activeTab: tab
		})
	}

	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setActiveTab(tab)
		}
	}

	render() {
		return (
			<div>
				<TopNav />
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => {
								this.toggle('1')
							}}
						>
							Profile
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => {
								this.toggle('2')
							}}
						>
							Bookings
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<div>
									<div>
										<div>
											<Jumbotron>
												<h1 style={{ fontFamily: 'Montserrat:100' }}>
													Edit My Profile
												</h1>

												<Media left href="#">
													<Media object data-src={this.state.profile.avatar} />
												</Media>
												<Media body>
													<Media heading></Media>
												</Media>

												<div className="profile">
													<FormGroup>
														<Label for="examplename">Name</Label>
														<Input
															type="text"
															name="name"
															id="exampleName"
															value={this.state.profile.name}
														/>
													</FormGroup>
													<FormGroup>
														<Label for="exampleEmail">Email</Label>
														<Input
															type="email"
															name="email"
															id="exampleEmail"
															value={this.state.profile.email}
														/>
													</FormGroup>
													<FormGroup>
														<Label for="examplePassword">Password</Label>
														<Input
															type="password"
															name="password"
															id="examplePassword"
															placeholder="password placeholder"
														/>
													</FormGroup>
													<FormGroup>
														<Label for="exampleFile">
															Change Profile Picture
														</Label>
														<Input type="file" name="file" id="exampleFile" />
														<FormText color="muted">
															This is some placeholder block-level help text
														</FormText>
													</FormGroup>
												</div>
												<button className="primary">Save Changes</button>
											</Jumbotron>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="2">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</div>
		)
	}
}

export default Profile
