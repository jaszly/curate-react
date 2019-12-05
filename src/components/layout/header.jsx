import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from './nav'
import Filters from './filters'

class Header extends React.Component {
	render() {
		return (
			<div>
				<TopNav />
				<div className="hero">
					<div className="hero-inner">
						<h1>Curate</h1>
						<h2>Stylish Spaces for Content Creators</h2>
					</div>
				</div>
				<main>content</main>
			</div>
		)
	}
}
export default Header
