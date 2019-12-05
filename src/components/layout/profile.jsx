import React, { useState } from 'react'
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
	Col
} from 'reactstrap'

import classnames from 'classnames'

// const Profile = props => {
class Profile extends React.Component {
	// const [activeTab, setActiveTab] = useState('1')
	state = {
		activeTab: '1'
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
											<h1 style={{ fontFamily: 'Montserrat:300' }}>
												Hi, My Name is user.name
											</h1>
											<form>
												<div className="group">
													<label>Name</label>
													<input type="text" />
												</div>
												<div className="group">
													<label>Email</label>
													<input type="email" />
												</div>
												<div className="group">
													<label>Location</label>
													<input type="text" />
												</div>
												<div className="group">
													<label>Profile Picture</label>
													<div className="user">
														<div className="avatar" />
														<div className="name">
															<input type="file" />
														</div>
													</div>
												</div>
												<button>Save Changes</button>
											</form>
											<hr />
											<button className="secondary">Logout</button>
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
