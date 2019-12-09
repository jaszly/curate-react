import React from 'react'
import { Link } from 'react-router-dom'
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardGroup,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap'

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
				<div className="small">
					<Card>
						<CardImg
							className="image"
							top
							width="100"
							style={{ backgroundImage: `url('${this.props.space.image}')` }}
						/>
						<CardBody>
							<span className="title" style={{ fontFamily: 'Abril Fatface' }}>
								{this.props.space.title}
							</span>

							<CardSubtitle className="content">
								${this.props.space.price} / hour
							</CardSubtitle>
							<CardText>
								<small className="small">
									<i
										className="fas fa-map-marker-alt"
										style={{ color: '#f9a03f', marginRight: '2px' }}
									/>

									<span className="city">
										{this.props.space.neighborhood}
										<span className="city"> | {this.props.space.city}</span>
									</span>
								</small>
							</CardText>
							<Link
								to={`/spaces/${this.props.space._id}`}
								className="primary"
								style={{
									fontFamily: 'Lato',
									fontSize: '1rem'
								}}
							>
								Explore Space
							</Link>
						</CardBody>
					</Card>
				</div>
			</>
		)
	}
}
export default Cards

// render() {
// 	return (
// 		<>
// 	<div
// 		className="image"
// 		style={{ backgroundImage: `url('${this.props.space.image}')` }}
// 	></div>
// 	<div className="content">
// 		{this.props.space.price ? (
// 			<span className="price">${this.props.space.price} / hour</span>
// 		) : (
// 			''
// 		)}
// 		<h2>{this.props.space.title}</h2>
// 		<small className="location">
// 			<i className="fas fa-map-pin" />
//
// 			<span>
// 				{this.props.space.neighborhood}{' '}
// 				<span className="city"> | {this.props.space.city}</span>
// 			</span>
// 		</small>
//
// 		<div>
// 			<Link to={`/spaces/${this.props.space._id}`}>
// 				<button className="primary"> Explore Space</button>{' '}
// 			</Link>
// 			<Link to={`/book/${this.props.space._id}`}>
// 				<button className="primary">Book</button>
// 			</Link>
// 		</div>
// 	</div>
// </Link>
// 			</>
// 		)
// 	}
// }
//
// export default Cards
