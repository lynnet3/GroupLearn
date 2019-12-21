import React, { Component } from "react";
import { Container } from "../components/Grid";
import  Form2  from "../components/Form2/index.js";
import {FormBtn} from "../components/Form"
import API from "../utils/API";
import PostGroup from "../components/PostGroup";

class MakePost extends Component {

    state = {
        returnedName: "",
        returnedEmail: ""
    }

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

componentWillMount(){
    this.checkForUser()
  }

render() {
  
return (

<Container fluid>
You are logged in as: {this.state.returnedName}
<br></br>
Your email is: {this.state.returnedEmail}

    <PostGroup
    returnedName = {this.state.returnedName}
    returnedEmail = {this.state.returnedEmail}
    ></PostGroup>

</Container>

)
}
}

export default MakePost;