import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import api from "../api";

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		
		this.setState({
			loading: true,
			error: null,
		});

		try {
			await api.badges.create(this.state.form);
			this.setState({
				loading: false,
			});

			this.props.history.push("/badges");
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			});
		}

		// this.setState({
		// 	form: {
		// 		...this.state.form,
		// 		[e.target.name]: e.target.value,
		// 	},
		// });
	};

	render() {
		
		if (this.state.loading === true) {
			return <h1>Cargando..</h1>;
		}

		return (
			<div>
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								avatarUrl="https://www.gravatar.com/avatar?d=identicon"
								firstName={this.state.form.firstName || "FIRST_NAME"}
								lastName={this.state.form.lastName || "LAST_NAME"}
								email={this.state.form.email || "EMAIL"}
								jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
								twitter={this.state.form.twitter || "TWITTER"}
							/>
						</div>

						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
