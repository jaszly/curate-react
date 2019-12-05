import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from '../layout/nav'

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	}

	userLogin = e => {}

	render() {
		return (
			<>
				<TopNav />

				<div
					className="grid center middle tall images"
					style={{
						backgroundImage:
							'url("https://i.ibb.co/R7y2fvH/filios-sazeides-6qbtnk-Grf-U-unsplash.jpg")'
					}}
				>
					<div>
						<form>
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
