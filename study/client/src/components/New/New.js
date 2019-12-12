import React from "react";

const New = props =>{
    return(
        <form className="new">
            <div className="ui form">
                <div className="fields">
                    <div className="field">
                        <input 
                        name="username"
                        type="text" 
                        placeholder="Username"
                        value={props.username}
                        onChange={props.handleUserChange}
                        />
                        <i className="user icon"></i>
                    </div>
                    <div className="field">
                        <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={props.email}
                        onChange={props.handleEmailChange}
                        />
                        <i className="envelope square icon"></i>
                    </div>
                    <div className="field">
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={props.password}
                        onChange={props.handlePassChange}
                        />
                        <i className="lock icon"></i>
                    </div>
                    <div className="ui green submit button">Sign Up</div>
                </div>
            </div>
        </form>
    )
};

export default New;