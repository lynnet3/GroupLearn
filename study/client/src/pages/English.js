import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";


class Main extends Component {
render() {
return (

<Container fluid>
    <Row>
        <Col size="md-6">
<form>
    Log in:
    <Input
        //value={this.state.title}
        //onChange={this.handleInputChange}
        name="name"
        placeholder="enter name here"
        />
        <Input
        //value={this.state.title}
        //onChange={this.handleInputChange}
        name="password"
        placeholder="enter name here"
        />
</form>
        </Col>
    </Row>
</Container>

)
}
}


export default Main;