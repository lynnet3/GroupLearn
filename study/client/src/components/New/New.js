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
                        value={value.username}
                        onChange={handleUserChange}
                        />
                    </div>
                    <div className="field">
                        <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={value.email}
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="field">
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={value.password}
                        onChange={handlePassChange}
                        />
                    </div>
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


