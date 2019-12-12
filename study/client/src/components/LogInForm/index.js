import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";

class LogInForm extends Component { //main is a test page to test user creation (Working)

    state = { //All the variables that will change
      userName: "",
        password: "",
      };
    

    handleSubmit = event => { //whenever the form is submitted
event.preventDefault()

const form = this.state

if (form.userName && form.password) { //if all 3 areas are filled out, run this
    console.log("posted") //log them
    API.getUser({ //call getUser from ../utils/API
      userName: form.userName, //insert the 2 data areas to getUser
      password: form.password,
    })
      .then(res => {console.log(res.data)})
      .catch(err => console.log(err));
    }
};

handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
    

render() {
return (

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
        onClick={this.handleSubmit} //when this button is clicked, it submits the form
        >Submit</FormBtn>
</form>
        </Col>
    </Row>


)
}
}

export default LogInForm;