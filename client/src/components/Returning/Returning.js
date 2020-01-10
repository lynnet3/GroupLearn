import React, {Component} from "react";
import {Col, Row, Container} from "../Grid";
import {Input, TextArea, FormBtn} from "../Form"
import "./style.css"
class Returning extends Component{
state = {
    username:"",
    password:""
};

handleSubmit = event =>{
    event.preventDefault()
}

handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
        [name]: value
    });
};

render(){
    return( 
       <div className="loginForm">
        <form className="returning" id="formBox">
            <div className="ui center aligned basic segement">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                            <div className="field">
                                <div className="ui left icon input">
                                    <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    value={props.username}
                                    onChange={props.handleUserChange}
                                    />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={props.password}
                                    onChange={props.handlePassChange}
                                    />
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            <button 
                            type="submit"
                            onClick={props.handleReturnSubmit}
                            className="ui blue submit button">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            <div className="ui horizontal divider" id="buttonBox">
            Or
            </div>
            <button
            type="button"
            className="ui big button"
            id="subButton">
            <i className="signup icon"></i>
            Sign In
            </button>
    </div>
    )
}
}
export default Returning;