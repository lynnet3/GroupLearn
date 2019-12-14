import React, { Component } from "react";
import { Container } from "../components/Grid";
import  Form2  from "../components/Form2/index.js";
import  LogInForm  from "../components/LogInForm";

class Main extends Component { //main is a test page to test user creation (Working)
    
    state = {
        returnedName: "Jones"
    }

render() {
return (

<Container fluid>

    <Form2>
    </Form2>

    <LogInForm
    returnedName = {this.state.returnedName}
    >
    </LogInForm>

    {this.state.returnedName}

</Container>

)
}
}

export default Main;