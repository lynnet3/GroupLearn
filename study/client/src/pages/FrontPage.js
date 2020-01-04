import React, { Component } from "react";
import NavBar from "../components/Nav/navBar 2";
import UserGreet from '../components/UserGreet/userGreet';
import SubjectBar from '../components/SubjectBar/subjectBar';
import API from "../utils/API";
class FrontPage extends Component { //main is a test page to test user creation (Working)
    state = {
        returnedName: "User",
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
        <div className="container">
        <div>
        <NavBar/>
        <UserGreet
        returnedName = {this.state.returnedName}>
        </UserGreet>
        <SubjectBar/> 
        </div>
        </div>
      );
    }
    }
    
    export default FrontPage;