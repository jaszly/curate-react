import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from './nav'
import Search from './filters'

// import Filters from './filters'

class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="hero-img">
					<div className="ctnr box">
						<h2 style={{ fontFamily: 'Montserrat', fontSize: '40px' }}>
							What are you looking for?
						</h2>
						<span
							style={{
								fontFamily: 'Montserrat',
								letterSpacing: '.5px',
								fontSize: '20px'
							}}
						>
							Find the perfect space for your creative needs
						</span>
						<div> </div>
						<div>
							<input
								className="ctnr-search"
								type="text"
								placeholder="    Search"
								onChange={e => this.props.searchSpaces(e)}
								style={{
									width: '320px',
									height: '40px',
									backgroundPosition: 'center',
									borderRadius: '30px',
									color: '#333'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Header
