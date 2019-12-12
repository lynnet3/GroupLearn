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
                    </div>
                    <div className="field">
                        <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={props.email}
                        onChange={props.handleEmailChange}
                        />
                    </div>
                    <div className="field">
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={props.password}
                        onChange={props.handlePassChange}
                        />
                    </div>
                    <div className="ui blue submit button">Sign Up</div>
                </div>
            </div>
        </form>
    )
};

export default New;


//<input
    // name="email"
    // type="text"
    // placeholder="Email"
    // value={values.email}
    // onChange={handleChange}
    // name="password"
    // type="password"
    // placeholder="Password"
    // value={value.password}
    // onChange={handleChange}
    // />


