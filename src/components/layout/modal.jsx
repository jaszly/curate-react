import React from 'react'
import Rodal from 'rodal'
// import Slider from './slider'

// include styles
import 'rodal/lib/rodal.css'

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = { visible: false }
	}

	show() {
		this.setState({ visible: true })
	}

	hide() {
		this.setState({ visible: false })
	}

	render() {
		return (
			<div>
				<button onClick={this.show.bind(this)}>List Your Space</button>

				<Rodal
					className="grid card tall center medium"
					visible={this.state.visible}
					onClose={this.hide.bind(this)}
				>
					<h1>title here</h1>
					<h3>List Your Space On </h3>
					<h2>Curate</h2>
					<small className="location">
						<i className="fas fa-map-pin" />
						<span className="city"> neighborhood | city </span>
					</small>
					<div className="content"></div>
					<p>this will be a description of the space</p>
					<h3>Features</h3>
					<div className="card specs">
						<div className="content">
							<ul>
								<li>
									<i className="fas fa-wifi" />
									wifi
								</li>
								<li>
									<i className="fas fa-badge" />
									air con
								</li>
							</ul>
						</div>
					</div>

					<div className="sidebar booking">
						<div className="card">
							<div className="content large">
								<h3>
									$200
									<small>per hour</small>
								</h3>
							</div>
						</div>
					</div>
				</Rodal>
			</div>
		)
	}
}

export default Modal
