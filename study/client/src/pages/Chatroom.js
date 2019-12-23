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

    render(){
        return (
            <Container fluid>
            <div className= "container">
            <Nav/>
            <Header/>
            <Jumbotron>
            <MessageBoard
            data = {this.state.data}>
            >
            </MessageBoard>
            </Jumbotron>
            <ChatPopUp>
            <Submit>
            </Submit>
           <Cancel>
         </Cancel>
            </ChatPopUp>

            </div>
            </Container>
        )
    }
}
export default Chatroom;