import React from "react";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";

import confLogo from "../images/badge-header.svg";

import "./styles/Badges.css";

import api from "../api";

class Badges extends React.Component {
	constructor(props) {
		console.log("1. constructor");

		super(props);

		this.state = {
			loading: true,
			error: null,
			data: undefined,
		};
	}

	componentDidMount() {
		console.log("3. componentDidMount");

		this.fetchData();

		this.intervalId = setInterval(() => {
			this.fetchData();
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	async fetchData() {
		this.setState({
			loading: true,
			error: null,
		});

		try {
			const data = await api.badges.list();

			this.setState({
				loading: false,
				data: data,
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			});
		}
	}

	render() {
		console.log("2/4. render");

		if (this.state.loading === true && this.state.data === undefined) {
			return <h1>Cargando..</h1>;
		}

		if (this.state.error) {
			return <h1>Error.. {this.state.error}</h1>;
		}

		return (
			<>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>

					<BadgesList badges={this.state.data} />

					{this.state.loading && <h2>Cargando..</h2>}
				</div>
			</>
		);
	}
}

export default Badges;
