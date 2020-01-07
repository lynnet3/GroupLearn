import React from "react";

 const Container= props => {
    return
        <div className={`congainer${props.fluid ? "-fluid" : "" }`}{...props} id="container"/>
 };

 export default Container;