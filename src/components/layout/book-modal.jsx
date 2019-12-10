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
					style={{ width: '90vw' }}
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
					<div>
						<div>
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

					<div>
						<div>
							<div>
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

//
//
//
// code for create
//
// 		<input
// 			type="text"
// 			value={this.state.listing.title}
// 			onChange={e => this.changeInput(e, 'title')}
// 		/>
// 	</div>
// 	<div className="group">
// 		<label>Description</label>
// 		<textarea />
// 	</div>
// 	<div className="group">
// 		<label>City</label>
// 		<input
// 			type="text"
// 			value={this.state.listing.city}
// 			onChange={e => this.changeInput(e, 'city')}
// 		/>
// 	</div>
// 	<div className="group">
// 		<label>Country</label>
// 		<input
// 			type="text"
// 			value={this.state.listing.country}
// 			onChange={e => this.changeInput(e, 'country')}
// 		/>
// 	</div>
// 	<div className="group">
// 		<label>Price per Night (USD)</label>
// 		<input
// 			type="number"
// 			value={this.state.listing.price}
// 			onChange={e => this.changeInput(e, 'price')}
// 		/>
// 	</div>
//
// 	<div className="group"></div>
// 	<div className="group">
// 		<label>Upload Photos</label>
// 		<input type="file" multiple />
// 	</div>
// 	<div className="group">
// 		<label>Amenities</label>
// 		{this.state.listing.features.map(amenity => (
// 			<label className="checkbox">
// 				<input type="checkbox" />
// 				{amenity.name}
// 			</label>
// 		))}
// 	</div>
// 	<button className="primary">Publish this Space</button>
// 	<button className="cancel" onClick="/host">
// 		<i className="fas fa-times" />
// 	</button>
// </form>
//
// react component {}
