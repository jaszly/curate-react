import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Signup extends React.Component {
	state = {
		user: { name: '', email: '', password: '', password2: '' }
	}

	//signup user and get token

	changeInput = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({ user })
		console.log(user)
	}

	signup = e => {
		e.preventDefault()
		axios
			.post('http://localhost:4000/signup', this.state.user)
			.then(res => {
				console.log(res)
				if (res.data.token) {
					localStorage.setItem('token', res.data.token)
					this.props.history.push('/')
				} else {
					alert('email adress already in use')
				}
			})
			.catch(err => console.log(err))
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
					<form className="grid signup-form " onSubmit={this.signup}>
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
								value={this.state.user.name}
								required
								onChange={e => this.changeInput(e, 'name')}
							/>
							<input
								className="form-input"
								id="txt-input"
								type="email"
								placeholder="Email"
								value={this.state.user.email}
								required
								onChange={e => this.changeInput(e, 'email')}
							/>
							<br />
							<input
								className="form-input"
								type="password"
								placeholder="Password"
								value={this.state.user.password}
								id="pwd"
								name="password"
								required
								onChange={e => this.changeInput(e, 'password')}
							/>
							<input
								className="form-input"
								type="password"
								placeholder="Confirm Password"
								value={this.state.user.password2}
								id="pwd"
								name="password"
								required
								onChange={e => this.changeInput(e, 'password2')}
							/>
						</span>
						<div className="group">
							<button
								className="secondary"
								onClick={e => this.signup(e, this.state.user)}
							>
								{' '}
								Signup{' '}
							</button>

							<div className="footer">
								<Link to="/login">
									<button className="secondary">
										Already have an account? Login
										<i className="fa fa-user-plus" aria-hidden="true" />
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</>
		)
	}
}

export default Signup
