import React from 'react'
import TopNav from './nav'
import { Link } from 'react-router-dom'

class Msg extends React.Component {
	render() {
		return (
			<>
				<TopNav
					filterFunction={this.filterFunction}
					history={this.props.history}
				/>
				<div className=" msg">
					<div className="ctnr box">
						<h2 style={{ fontFamily: 'Montserrat', fontSize: '40px' }}>
							Thank you, your request has been sent!
						</h2>
					</div>
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
							marginTop: '340px'
						}}
					>
						Back to Browse Spaces
					</Link>
				</div>
			</>
		)
	}
}
export default Msg
