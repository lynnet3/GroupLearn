<<<<<<< HEAD
import React from "react";
import Nav from "../components/Nav/navBar 2";
import Submit from "./components/Submit Button/index";
import Cancel from "./components/Cancel Button/index";
import MessageBoard from "./components/MessageBoard/index";
import ChatPopup from "./components/ChatPopUp/index";
import Jumbotron from "./components/Jumbotron/index";
import Header from "./components/Header/index";

class Chatroom extends Component {

=======
import React, {Component} from "react";
import { Container } from "../components/Grid";
import Nav from "../components/Nav/navBar 2";
import Submit from "../components/Submit";
import Cancel from "../components/Cancel";
import MessageBoard from "../components/MessageBoard";
import ChatPopUp from "../components/ChatPopUp";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header";
import API from "../utils/API";

class Chatroom extends Component {

  state = {
data: { data: [] }
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
    
      getAllPosts = () => {
        console.log("checkForPosts")
        API.getAllPosts()
      .then(res => {
          console.log(res)
        this.setState({
          data: res
        });
      })
      .catch(err => console.log(err));
      }
    
      componentWillMount(){
        this.checkForUser()
        this.getAllPosts()
      }

>>>>>>> 2f0a9d7e88274459b1ae7929cc0329b9ab904a20
    render(){
        return (
            <Container fluid>
            <div className= "container">
            <Nav/>
            <Header/>
            <Jumbotron>
<<<<<<< HEAD
            <MessageBoard>
            </MessageBoard>
            </Jumbotron>
            <ChatPopup>
=======
            <MessageBoard
            data = {this.state.data}>
            >
            </MessageBoard>
            </Jumbotron>
            <ChatPopUp>
>>>>>>> 2f0a9d7e88274459b1ae7929cc0329b9ab904a20
            <Submit>
            </Submit>
           <Cancel>
         </Cancel>
<<<<<<< HEAD
            </ChatPopup>

            </div>
            </Container>
        );
=======
            </ChatPopUp>

            </div>
            </Container>
        )
>>>>>>> 2f0a9d7e88274459b1ae7929cc0329b9ab904a20
    }
}
export default Chatroom;