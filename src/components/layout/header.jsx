import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="hero">
					<div className="hero-inner">
						<h1>Curate</h1>
						<h2>Stylish Spaces for Content Creators</h2>
						<a href="https://example.com/" className="button">
							button
						</a>
					</div>
				</div>
				<main>content</main>
			</div>
		)
	}
}
export default Header
