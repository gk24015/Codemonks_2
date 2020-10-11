import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class NavDashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    
    render() {
        const { user } = this.props.auth;
        return (
            <div className="navbar-fixed">
            <nav className="z-depth-0">
            <div className="nav-wrapper" style={{background:"#1E1F26"}}>
                <Link
                to="/"
                style={{
                    fontFamily: "monospace"
                }}
                className="col s5 brand-logo center white-text"
                >
                <i className="material-icons">code</i>
                CODEMONKS
                </Link>
                <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn waves-effect waves-light hoverable accent-3"
              style={{float:"right", marginTop:"16px", marginRight:"20px", width:"140px"}}
            >
              Logout
            </button>
            </div>
            </nav>
        </div>
        )
}
}

NavDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavDashboard);