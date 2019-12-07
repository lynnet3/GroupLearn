import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Main extends Component {

    handleSubmit = event => {
event.preventDefault()

if (this.state.name && this.state.password) {
    API.saveBook({
      name: this.state.title,
      password: this.state.password,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
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