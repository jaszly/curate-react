import React, { useState } from 'react'
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

const TopNav = props => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<div>
			<Navbar color="light" expand="md">
				<NavbarBrand href="/">curate</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
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
								<DropdownItem>San Francisco</DropdownItem>
								<DropdownItem>Palm Springs</DropdownItem>
								<DropdownItem>New York City</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<input type="text" placeholder="Search" />
				</Collapse>
			</Navbar>
		</div>
	)
}

export default TopNav
