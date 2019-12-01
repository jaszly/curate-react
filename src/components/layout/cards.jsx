import React from 'react'
import { Link } from 'react-router-dom'

class Cards extends React.Component {
	componentWillMount() {
		this.setState({ space: this.props.space })
	}

	componentWillReceiveProps(props) {
		this.setState({ space: this.props.space })
	}

	render() {
		return (
			<>
				<Link className="card link">
					{' '}
					<div
						className="image"
						style={{ backgroundImage: `url('${this.props.space.image}')` }}
					></div>
					<div className="content">
						{this.props.space.price ? (
							<span className="price">${this.props.space.price} / hour</span>
						) : (
							''
						)}
						<h2>{this.props.space.title}</h2>
						<small className="location">
							<i className="fas fa-map-pin" />

							<span>
								{this.props.space.neighborhood}{' '}
								<span className="city"> | {this.props.space.city}</span>
							</span>
						</small>

						<div>
							<Link to={`/spaces/${this.props.space._id}`}>
								<button> Explore This Space</button>{' '}
							</Link>
							<Link to={`/book/${this.props.space._id}`}>
								<button>Book</button>
							</Link>
						</div>
					</div>
				</Link>
			</>
		)
	}
}

export default Cards
