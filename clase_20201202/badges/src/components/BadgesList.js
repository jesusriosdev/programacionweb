import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem">
				<Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} />

				<div>
					<strong>
						{this.props.badge.firstName} {this.props.badge.lastName}
					</strong>
					<br />@{this.props.badge.twitter}
					<br />
					{this.props.badge.jobTitle}
				</div>
			</div>
		);
	}
}

function BadgesList(props) {
	const badges = props.badges;

	return (
		<div className="BadgesList">
			<ul className="list-unstyled">
				{badges.map((badge) => {
					return (
						<li key={badge.id}>
							<Link
								className="text-reset text-decoration-none"
								to={`/badges/${badge.id}`}
							>
								<BadgesListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default BadgesList;
