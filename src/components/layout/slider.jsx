import React from 'react'
import { Link } from 'react-router-dom'

class Slider extends React.Component {
	render() {
		return (
			<div className="container">
				<input id="rad1" type="radio" name="rad" defaultChecked />
				<section>
					<h1>Card 1</h1>
					<p>Description 1</p>
					<label htmlFor="rad3">
						<i className="fa fa-chevron-left" />
					</label>
					<label htmlFor="rad2">
						<i className="fa fa-chevron-right" />
					</label>
				</section>
				<input id="rad2" type="radio" name="rad" />
				<section>
					<h1>Card 2</h1>
					<p>Description 2</p>
					<label htmlFor="rad1">
						<i className="fa fa-chevron-left" />
					</label>
					<label htmlFor="rad3">
						<i className="fa fa-chevron-right" />
					</label>
				</section>
				<input id="rad3" type="radio" name="rad" />
				<section>
					<h1>Card 3</h1>
					<p>Description 3</p>
					<label htmlFor="rad2">
						<i className="fa fa-chevron-left" />
					</label>
					<label htmlFor="rad4">
						<i className="fa fa-chevron-right" />
					</label>
				</section>
				<input id="rad4" type="radio" name="rad" />
				<section>
					<h1>Card 4</h1>
					<p>Description 4</p>
					<label htmlFor="rad3">
						<i className="fa fa-chevron-left" />
					</label>
					<label htmlFor="rad1">
						<i className="fa fa-chevron-right" />
					</label>
				</section>
			</div>
		)
	}
}

export default Slider
