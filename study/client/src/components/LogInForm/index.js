import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import Returning from "../Returning";
import Container from "../Container";

class LogInForm extends Component { //main is a test page to test user creation (Working)

    state = { //All the variables that will change
      userName: "",
        password: "",
      };

      handleSubmit = event => { //whenever the form is submitted
        event.preventDefault()
      }

handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
render() {
return (

//     <Row>
//         <Col size="md-3">
// <form>
//     Log in:
//     <Input
//         value={this.state.name}
//         onChange={this.handleInputChange}
//         name="userName"
//         placeholder="enter userName here"
//         />
//         <Input
//         value={this.state.password}
//         onChange={this.handleInputChange}
//         name="password"
//         placeholder="enter password here"
//         />
//         <FormBtn
//         onClick={this.handleSubmit} //when this button is clicked, it submits the form
//         >Submit</FormBtn>
// </form>
//         </Col>
//     </Row>

<div>
<Container style={{ minHeight: "80% "}}>
  <h3 className="loginText">Welcome new user sign up or sign in</h3>
  <Returning >
    handleReturnSubmit={this.handleReturnSubmit}
    handleUserChange={this.handleUserChange}
    handlePassChange={this.handlePassChange}
    handleNewSubmit={this.handleNewSubmit}
    handleNewUser={this.handleNewUser}
    handleNewEmail={this.handleNewEmail}
    handleNewPass={this.handleNewPass}
  </Returning>
</Container>
</div>
    <Row>
        <Col size="md-3">
<form>
    Log in:
    <Input
        value={this.state.name}
        onChange={this.handleInputChange}
        name="userName"
        placeholder="enter userName here"
        />
        <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="enter password here"
        />
        <FormBtn
        onClick={e => this.props.handleSubmit(e, this.state.userName, this.state.password)} //when this button is clicked, it submits the form
        >Submit</FormBtn>
</form>

{this.state.returnedName}
        </Col>
    </Row> //returnedName is from the response

)
}

}

export default LogInForm;