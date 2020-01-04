import React, { Component } from "react";
import { Col, Row} from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";

class PostGroup extends Component { //main is a test page to test user creation (Working)

    state = { //All the variables that will change
        subject: "",
        location: "",
        content: ""
      };
    

    handleSubmit = event => { //whenever the form is submitted
event.preventDefault()

const form = this.state

if (form.location && form.content) { //if all 3 areas are filled out, run this
    console.log(form.subject) //log them
    console.log(form.location)
    console.log(form.content)
    API.saveGroup({ //call saveGroup from ../utils/API
      subject: this.props.subject, //insert the 3 data areas plus the user to saveGroup
      location: form.location,
      content: form.content,
      user: {
        userName: this.props.returnedName,
        email: this.props.returnedEmail
      }
    })
      .then(res => console.log(res.data))
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
    Make a request to start a studygroup
        <Input
        value={this.state.location}
        onChange={this.handleInputChange}
        name="location"
        placeholder="enter location here"
        />
         <TextArea
        value={this.state.content}
        onChange={this.handleInputChange}
        name="content"
        placeholder="enter content here"
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

export default PostGroup;