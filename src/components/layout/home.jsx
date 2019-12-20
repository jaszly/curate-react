import React from 'react'
import { Link } from 'react-router-dom'
import CityCards from './city-cards.jsx'

import TopNav from './nav'
import Filters from './filters'
import Cards from './cards.jsx'
import axios from 'axios'
import { Jumbotron, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class Home extends React.Component {
	state = {
		cities: [{ name: '', state: '' }]
	}
	componentWillMount() {
		axios
			.get(`${process.env.REACT_APP_API}/cities`)
			.then(res => {
				console.log('res.data:', res.data)
				this.setState({
					cities: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<TopNav />
				<div className="bg-img">
					<div className="ctnr box ">
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
							<Link to="/spaces" className="primary">
								Browse Spaces
							</Link>
						</div>
					</div>
				</div>
				<div className="grid tiny">
					<h1 className="display-3"> Our Cities:</h1>
					<br />
					{this.state.cities.map((city, i) => (
						<CityCards city={city} key={i} />
					))}
				</div>
				<Jumbotron className="card center">
					<h2 style={{ fontFamily: 'Montserrat', fontSize: '40px' }}>
						How it Works:
					</h2>
					<p className="lead">
						Curate matches photographers, designers, content creators and more
					</p>
					<p className="lead">
						with award winning designs and personalized spaces.
					</p>
					<p className="lead">
						No matter what scale of project, Curate has spaces just for you.
					</p>
				</Jumbotron>
			</div>
		)
	}
}
export default Home
