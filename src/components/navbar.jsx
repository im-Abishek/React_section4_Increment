import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge rounded-pill bg-danger">{this.props.totalCounter}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
