import React, { Component } from "react";
import { Container } from "../components/Grid";
import  Form2  from "../components/Form2/index.js";
import  LogInForm  from "../components/LogInForm";
import {FormBtn} from "../components/Form"
import API from "../utils/API";

class Main extends Component { //main is a test page to test user creation (Working)
    
    state = {
        returnedName: ""
    }

       handleSubmit = (event, userName, password) => { //whenever the form is submitted

event.preventDefault()
if (userName && password) { //if all 3 areas are filled out, run this
    console.log("posted") //log them
    API.getUser({ //call getUser from ../utils/API
      userName, //insert the 2 data areas to getUser
      password,
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          returnedName: res.data.dbModel[0].userName
        });
      })
      .catch(err => console.log(err));
    }
};

buttonBoop = () => console.log("this.state.returnedName")

render() {
return (

<Container fluid>
You are logged in as: {this.state.returnedName}
    <Form2>
    </Form2>

    <LogInForm
    handleSubmit={this.handleSubmit}
    returnedName = {this.state.returnedName}
    >
    </LogInForm>

    <button
    onClick={() => console.log(this.state.returnedName)}>
        oui
    </button>

</Container>

)
}
}

export default Main;