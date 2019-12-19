import React, { Component } from "react";
import { Container } from "../components/Grid";
import  Form2  from "../components/Form2/index.js";
import  LogInForm  from "../components/LogInForm";
import {FormBtn} from "../components/Form"
import API from "../utils/API";
import PostGroup from "../components/PostGroup";

class Login extends Component { //main is a test page to test user creation (Working)
    
    state = {
        returnedName: "",
        returnedEmail: ""
    }

       handleSubmit = (event, userName, password) => { //whenever the form is submitted

event.preventDefault()
if (userName && password) { //if all 2 areas are filled out, run this
    console.log("posted") //log them
    API.getUser({ //call getUser from ../utils/API
      userName, //insert the 2 data areas to getUser
      password,
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          returnedName: res.data.dbModel[0].userName,
          returnedEmail: res.data.dbModel[0].email
        });
        this.props.history.push("/")
      })
      .catch(err => console.log(err));
    }
};

checkForUser = () => {
  console.log("checkForUser")
  API.findCookie()
.then(res => {
  this.setState({
    returnedName: res.data.userName,
    returnedEmail: res.data.email
  });
})
.catch(err => console.log(err));
}


//something is wrong
render() {
  
return (

<Container fluid>

    <LogInForm
    handleSubmit={this.handleSubmit}
    returnedName = {this.state.returnedName}
    >
    </LogInForm>



</Container>

)
}
}

export default Login;