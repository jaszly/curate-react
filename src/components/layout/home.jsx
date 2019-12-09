import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from './nav'

import Filters from './filters'

class Home extends React.Component {
	render() {
		return (
			<div>
				<TopNav />
				<div className="bg-img">
					<div className="ctnr ">
						<h2 style={{ fontFamily: 'Montserrat', fontSize: '45px' }}>
							Curated Spaces <br /> for Content Creators
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
							<Link
								to="/spaces"
								className="primary"
								style={{
									fontFamily: 'Lato',
									fontSize: '1rem',
									backgroundColor: 'tomato',
									width: '200px',
									opacity: '80%',
									backgroundPosition: 'center',
									marginTop: '15px'
								}}
							>
								Browse Spaces
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Home
