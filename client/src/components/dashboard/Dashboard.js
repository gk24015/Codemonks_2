import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import dashboard from "./dashboard.svg";
import Nav from "./NavDashboard";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Nav />
      <div className="container" style={{marginTop:"2rem"}}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text white-text text-darken-1">
                Welcome to your {" "}
                <span style={{ fontFamily: "monospace" }}>CODEMONKS</span> Dashboard
              </p>
            
              <p className="flow-text grey-text text-darken-1">
                Let's Make your First Project!
              </p>
            </h4>
            <p>
            <Link
                to="/newproject"
                style={{
                  width: "450px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Make a Project!
              </Link>
            </p>
            <img src={dashboard} alt="dashboard" width="400px" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
