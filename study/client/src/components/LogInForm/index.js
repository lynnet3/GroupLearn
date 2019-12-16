import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
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