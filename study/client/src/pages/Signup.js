import React, { Component } from "react";
import { Container } from "../components/Grid";
import  Form2  from "../components/Form2/index.js";
import New from "../components/New"
import {FormBtn} from "../components/Form"
import API from "../utils/API";
import PostGroup from "../components/PostGroup";

class Signup extends Component { //main is a test page to test user creation (Working)

//something is wrong
render() {
  
return (

<Container fluid>
Create a new account
    <New>
    </New>

</Container>

)
}
}

export default Signup;