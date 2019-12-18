import React, { Component } from "react";
import Main from "../pages/Main";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NoMatch from "../pages/NoMatch";
import NavBar from "../components/Nav/navBar 2";
import Login from "../components/LogInForm/Login";
import UserGreet from '../components/UserGreet/userGreet';
import SubjectBar from '../components/SubjectBar/subjectBar';
import Bookshelf2 from "../Bookshelf2.jpg";
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
    
    render() {
        return (
        <div className="container">
        <div>
        <NavBar/>
        <UserGreet
        returnedName = {this.state.returnedName}>
        </UserGreet>
        <SubjectBar/> 

        <button
    onClick={() => this.checkForUser()}>
        get user saved to cookie
    </button>
        </div>
        </div>
      );
    }
    }
    
    export default FrontPage;