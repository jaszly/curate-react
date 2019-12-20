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
	CardImgOverlay,
	Button
} from 'reactstrap'

class CityCards extends React.Component {
	componentWillMount() {
		this.setState({ city: this.props.city })
	}

	// componentWillMount() {
	// 	let cityId = this.props.match.params.id
	// 	let cityURL = `${process.env.REACT_APP_API}/spaces/${cityId}`
	// 	axios
	// 		.get(cityURL)
	// 		.then(res => {})
	// 		.catch(err => {
	// 			console.log('ERROR', err)
	// 		})
	// }

	componentWillReceiveProps(props) {
		this.setState({ city: this.props.city })
	}

	render() {
		return (
			<>
				<div>
					<Card>
						<CardImg
							className="image"
							width="90%"
							style={{ backgroundImage: `url('${this.props.city.img}')` }}
						/>
						<CardBody>
							<span
								className="title"
								style={{
									fontFamily: 'Montserrat',
									fontSize: '20px'
								}}
							>
								{this.props.city.name}
							</span>

							<CardText></CardText>
						</CardBody>
					</Card>
				</div>
			</>
		)
	}
}
export default CityCards
