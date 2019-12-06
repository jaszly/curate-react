import React, { useState } from 'react'
import axios from 'axios'
import Search from './filters'

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap'
import classnames from 'classnames'

// const TopNav = props => {
class TopNav extends React.Component {
	// const [isOpen, setIsOpen] = useState(false)

	state = {
		isOpen: false,
		user: {
			name: '',
			avatar: ''
		}
	}

	toggle = () => {
		this.setIsOpen(!this.isOpen)
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/auth', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then(res => {
				console.log('RESSSS', res)
				console.log({ user: res.data })
				this.setState({
					user: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}
	render() {
		return (
			<div>
				<Navbar color="light" expand="md">
					<NavbarBrand href="/">curate</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/login">Login</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/signup">List Your Space </NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Cities We're In
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem
										onClick={e =>
											this.props.filterFunction(e, 'San Francisco Bay Area')
										}
									>
										San Francisco
									</DropdownItem>
									<DropdownItem
										onClick={e => this.props.filterFunction(e, 'Palm Springs')}
									>
										Palm Springs
									</DropdownItem>
									<DropdownItem
										onClick={e => this.props.filterFunction(e, 'New York City')}
									>
										New York City
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>

						<input type="text" placeholder="Search" />
					</Collapse>
					<div className="profile">
						<div
							className="avatar"
							style={{
								backgroundImage: `url('${this.state.user.avatar}')`
							}}
						></div>
						<a href="profile" className="button primary">
							<span>{this.state.user.name}</span>
						</a>
					</div>
				</Navbar>
			</div>
		)
	}
}

export default TopNav
