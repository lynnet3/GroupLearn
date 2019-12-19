import React from "react";

const Returning = props =>{
    return(
        <form className="returning">
            <div className="ui placeholder segment">
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
                    
                    <div class="middle aligned column">
                        <button 
                        type="button"
                        className="ui big button">
                            <i className="signup icon"></i>
                            Sign Up
                        </button>
                    </div>
                    <div class="ui vertical divider">
                        Or
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Returning;