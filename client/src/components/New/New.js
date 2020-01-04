import React from "react";

const New = props =>{
    return(
        <form className="new">
                <div className="fields">
                    <div className="field">
                        <input 
                        name="username"
                        type="text" 
                        placeholder="Username"
                        value={props.username}
                        onChange={props.handleNewUser}
                        />
                        <i className="user icon"></i>
                    </div>
                    <div className="field">
                        <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={props.email}
                        onChange={props.handleNewEmail}
                        />
                        <i className="envelope square icon"></i>
                    </div>
                    <div className="field">
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={props.password}
                        onChange={props.handleNewPass}
                        />
                        <i className="lock icon"></i>
                    </div>
                    <button 
                    type="submit"
                    onClick={props.handleNewSubmit}
                    className="ui big button">
                        <i className="signup icon"></i>
                        Sign Up
                    </button>
                </div>
        </form>
    )
};

export default New;