import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Main extends Component {

    state = {
        name: "",
        password: "",
        email: ""
      };
    

    handleSubmit = event => {
event.preventDefault()

const form = this.state

if (form.name && form.password && form.email) {
    console.log(form.name)
    console.log(form.password)
    console.log(form.email)
    API.saveUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
    

render() {
return (

<Container fluid>
    <Row>
        <Col size="md-3">
<form>
    Log in:
    <Input
        value={this.state.name}
        onChange={this.handleInputChange}
        name="name"
        placeholder="enter name here"
        />
        <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="enter password here"
        />
         <Input
        value={this.state.email}
        onChange={this.handleInputChange}
        name="email"
        placeholder="enter email here"
        />
        <FormBtn
        onClick={this.handleSubmit} //when this button is clicked, it submits the form
        >Submit</FormBtn>
</form>
        </Col>
    </Row>
</Container>

)
}
}

export default Main;