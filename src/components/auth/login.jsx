import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav } from 'reactstrap'

class Login extends React.Component {
	state = {
		user: {}
	}

	changeField = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({ user })
		console.log({ user })
	}

	userLogin = e => {
		e.preventDefault()
		axios
			.post('http://localhost:4000/login', this.state.user)
			.then(res => {
				console.log('data comes back')
				console.log(res)
				this.setState(this.state.user)
				if (!res.data.token) {
					console.log('what is wrong')
					alert('please try again')
				} else {
					console.log('this is good')
					localStorage.setItem('token', res.data.token)
					this.props.history.push('/spaces')
				}
			})
			.catch(err => {
				console.log('no')
				console.log(err)
			})
	}

	render() {
		return (
			<>
				<Navbar color="light" expand="md" style={{ height: '60px' }}>
					<NavbarBrand href="/" style={{ fontSize: '30px' }}>
						curate
					</NavbarBrand>
					<NavbarBrand
						style={{
							color: '#fff',
							fontSize: '15px',
							fontFamily: 'Montserrat',
							paddingTop: '8px'
						}}
					>
						Stylish Spaces for Content Creators{' '}
					</NavbarBrand>
				</Navbar>
				<div
					className="grid center middle tall images"
					style={{
						backgroundImage:
							'url("https://i.ibb.co/R7y2fvH/filios-sazeides-6qbtnk-Grf-U-unsplash.jpg")'
					}}
				>
					<div>
						<form className="form">
							<header className="head-form ">
								<br />
								<h2>Welcome to Curate</h2>
								<h6 className="subTxt">Please Log In to Continue</h6>
							</header>

							<span className="group">
								<input
									className="form-input"
									id="txt-input"
									type="email"
									placeholder="Email"
									required
									value={this.state.email}
									onChange={e => this.changeField(e, 'email')}
								/>
								<br />
								<input
									className="form-input"
									type="password"
									placeholder="Password"
									id="pwd"
									name="password"
									required
									value={this.state.password}
									onChange={e => this.changeField(e, 'password')}
								/>
							</span>
							<div className="group">
								<button className="secondary" onClick={e => this.userLogin(e)}>
									Log In
								</button>
								<div className="footer">
									<Link to="/signup">
										<button className="secondary">
											New to Curate? Signup
											<i className="fa fa-user-plus" aria-hidden="true" />
										</button>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</>
		)
	}
}

export default Login
