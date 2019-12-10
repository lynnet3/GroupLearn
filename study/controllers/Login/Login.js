import React from "react";

const Login = props =>{
    return(
        <form className="login">
            <div className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="Username"
                        value={value.username}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default Login;


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


