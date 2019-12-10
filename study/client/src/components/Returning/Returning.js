import React from "react";

const Returning = props =>{
    return(
        <form className="returning">
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
}

export default Returning;