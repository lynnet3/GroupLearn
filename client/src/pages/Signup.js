import React, { Component } from "react";
import { Container } from "../components/Grid";
import Nav from "../components/Nav/navBar 2"
import New from "../components/New"

class Signup extends Component { //main is a test page to test user creation (Working)

    SendBack = () => {
        this.props.history.push("/")
    }
//something is wrong
render() {
  
return (

<Container fluid>
    <Nav></Nav>
Create a new account
    <New
    SendBack={this.SendBack}>
    </New>

</Container>

)
}
}

export default Signup;