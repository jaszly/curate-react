import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
	state = {
		user: {
			name: '',
			email: '',
			password: '',
			thing: '',
			location: '',
			avatar: ''
		}
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
		console.log()

		axios
			.post('http://localhost:4000/signup', data)
			.then(res => {
				localStorage.setItem('token', res.data)
				this.props.history.push('/landing')
			})
			.catch(err => {
				console.log(err)
			})
	}

	// 	axios
	// 		.post('http://localhost:4000/signup', this.state.user)
	// 		.then(res => {
	// 			this.setState({
	// 				user: res.data
	// 			})
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }

	// userSignup = e => {
	// 	e.preventDefault()
	// 	axios
	// 		.post('http://localhost:4000/signup', this.state.user)
	// 		.then(res => {
	// 			this.setState(this.state.user)
	// 			console.log(res)
	// 			if (res.data.token) {
	// 				localStorage.setItem('token', res.data.token)
	// 				this.props.history.push('/places')
	// 			}
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }

	// fn signup takes user in state
	// signup = event => {
	// 	event.preventDefault()
	// 	axios.post('http://localhost:4000/signup', this.state.user)
	// 	.then(res => {
	// 		console.log(res)
	// 	})
	// }
	// sends to api at /signup
	//
	// changeInput = (event) => {
	// 	event.target.value()
	// }
	//

	render() {
		return (
			<>
				<div className="grid center middle tall image">
					<div className="card small">
						<div className="content">
							<div
								className="logo"
								style={{
									backgroundImage:
										'url("https://i.ibb.co/dc0pVVL/Luxe-Logo-Luxberry.png")'
								}}
							/>
							<form onSubmit={this.signup}>
								<div className="group">
									<label>Name</label>
									<input
										type="text"
										value={this.state.user.name}
										onChange={e => this.changeInput(e, 'name')}
									/>
								</div>
								<div className="group">
									<label>Email</label>
									<input
										type="email"
										value={this.state.user.email}
										onChange={e => this.changeInput(e, 'email')}
									/>
								</div>
								<div className="group">
									<label>Password</label>
									<input
										type="password"
										value={this.state.user.password}
										onChange={e => this.changeInput(e, 'password')}
									/>
								</div>
								<div className="group">
									<label>Location</label>
									<input
										type="text"
										value={this.state.user.location}
										onChange={e => this.changeInput(e, 'location')}
									/>
								</div>
								<div className="group">
									<label>Profile Picture</label>
									<input type="file" />
								</div>
								<button
									className="primary"
									onClick={e => this.signup(e, this.state.user)}
								>
									Signup
								</button>
							</form>
							<p className="footer">
								Already have an account? <a href="/login">Login</a>
							</p>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Signup
