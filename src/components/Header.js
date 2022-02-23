import { Component } from "react"

export default class Header extends Component {

	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<div className="navbar-brand">AoM Minecraft Server Dashboard</div>
				</div>
			</nav>
		)
	}

}