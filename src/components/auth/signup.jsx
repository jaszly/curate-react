import React from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

class Signup extends React.Component {
	state = {
		user: {
			name: '',
			email: '',
			password: '',
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
				this.props.history.push('/spaces')
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<>
				<div className="grid center middle tall image">
					<div className="card small">
						<div className="content">
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
