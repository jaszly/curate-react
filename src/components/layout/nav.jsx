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

	logout = e => {
		e.preventDefault()
		localStorage.removeItem('token')
		this.props.history.push('/login')
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
	checkToken = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}
	}
	render() {
		return (
			<div>
				<Navbar color="light" expand="md">
					<NavbarBrand href="/">curate</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							{this.checkToken() ? (
								<NavItem>
									<NavLink href="/list-your-space">List Your Space </NavLink>
								</NavItem>
							) : (
								<NavItem>
									<NavLink href="/login">List Your Space </NavLink>
								</NavItem>
							)}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Cities We're In
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem href="/spaces">View All Spaces</DropdownItem>
									<DropdownItem divider />
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
						{this.checkToken() ? (
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Profile
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem href="/profile">View My Profile</DropdownItem>
									<DropdownItem onClick={this.logout}>Logout</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						) : (
							<NavItem>
								<NavLink href="/login">Login</NavLink>
							</NavItem>
						)}
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default TopNav
