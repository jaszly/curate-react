import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
	render() {
		return (
			<>
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
									type="text"
									placeholder="Email"
									required
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
								<button className="secondary">Log In</button>
								<div className="footer">
									<button className="secondary">
										{' '}
										New to Curate? Signup
										<i className="fa fa-user-plus" aria-hidden="true" />
									</button>
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
