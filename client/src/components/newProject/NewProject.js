import React, { Component } from 'react';
import classnames from "classnames";
import create from "./create.svg";
import { Link } from "react-router-dom";

export default class NewProject extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          description: "",
        };
      }

      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const newProjectData = {
          name: this.state.name,
          description: this.state.password
        };
      };

    render() {

        return (
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8">
                    
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <h3>
                        <b><i className="material-icons" style={{fontSize:"50px"}}>code</i> Make a New Project!</b>
                    </h3>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                        <input
                        onChange={this.onChange}
                        value={this.state.name}
                        id="name"
                        type="text"
                        style={{color:"white"}}
                        required
                        />
                        <label htmlFor="text">Title of Project</label>
                    </div>
                    <div className="input-field col s12">
                        <input
                        onChange={this.onChange}
                        value={this.state.description}
                        style={{color:"white"}}
                        id="description"
                        type="text"
                        required
                        />
                        <label htmlFor="text">Describe your Project</label>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <Link
                        to="/userpen"
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable accent-3"
                        style={{background:"#00BFA6"}}
                        >
                        Create
                        </Link>
                    </div>
                    </form>
                </div>
                <div className="col s3">
                <img src={create} alt="create" width="450px" style={{marginLeft:"10px", marginTop:"80px"}}/>
                </div>
                </div>
                <div style={{textAlign:"center", marginTop:"5em", marginLeft:"15em", background:"#2C303A", width:"500px", height:"56px", padding:"1px", borderRadius:"10px"}}>
                <p style={{color:"white"}}>
                Go back to the <Link to="/dashboard">Dashboard</Link>
                </p>
                </div>
            </div>
        )
    }
}