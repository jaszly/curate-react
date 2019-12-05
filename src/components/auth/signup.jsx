import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Signup extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		password2: ''
	}

	//signup user and get token

	changeInput = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({ user })
		console.log(user)
	}

	addFile = e => {
		let user = this.state.user
		user.file = e.target.files[0]
		this.setState({ user })
	}

	signup = e => {
		e.preventDefault()
		let data = new FormData()
		for (let key in this.state.user) {
			data.append(key, this.state.user[key])
		}

		axios
			.post('http://localhost:4000/signup', data)
			.then(res => {
				localStorage.setItem('token', res.data)
				this.props.history.push('/places')
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<>
				<div className="grid wide">
					<div
						className="grid signup-img image tall wide"
						style={{
							backgroundImage:
								'url("https://i.ibb.co/R7y2fvH/filios-sazeides-6qbtnk-Grf-U-unsplash.jpg")'
						}}
					></div>
					<div className="grid signup-form tall">
						<header>
							<h2>Create an Account</h2>
							<h2>on Curate</h2>
						</header>
						<span className="group">
							<input
								className="form-input"
								id="txt-input"
								type="text"
								placeholder="Name"
								required
								onKeyUp="getText(this)"
							/>
							<input
								className="form-input"
								id="txt-input"
								type="email"
								placeholder="Email"
								required
								onKeyUp="getText(this)"
							/>
							<br />
							<input
								className="form-input"
								type="password"
								placeholder="Password"
								id="pwd"
								name="password"
								required
							/>
							<input
								className="form-input"
								type="password"
								placeholder="Confirm Password"
								id="pwd"
								name="password"
								required
							/>
						</span>
						<div className="group">
							<button className="secondary">Signup </button>
							<div className="footer">
								<Link to="/login">
									<button className="secondary">
										Already have an account? Login
										<i className="fa fa-user-plus" aria-hidden="true" />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Signup
