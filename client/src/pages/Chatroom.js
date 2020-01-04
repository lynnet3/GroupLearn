import React, {Component} from "react";
import { Container } from "../components/Grid";
import Nav from "../components/Nav/navBar 2";
import Submit from "../components/Submit";
import Cancel from "../components/Cancel";
import MessageBoard from "../components/MessageBoard";
import ChatPopUp from "../components/ChatPopUp";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header";
import PostGroup from "../components/PostGroup";
import API from "../utils/API";

class Chatroom extends Component {

  state = {
data: { data: [] },
subject: this.props.match.params.subject
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
    
      getSubjectPosts = () => {
        console.log("checkForPosts")
        API.getSubjectPosts({
          subject: this.state.subject
        })
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
        this.getSubjectPosts()
      }

    render(){
        return (
            <Container fluid>
            <div className= "container">
            <Nav/>
            <Header
            subject = {this.state.subject}>
            </Header>
            
            <MessageBoard
            data = {this.state.data}>
            </MessageBoard>
            
            </div>
            <div>
            <PostGroup
          subject = {this.state.subject}
          returnedName = {this.state.returnedName}
          returnedEmail = {this.state.returnedEmail}
          ></PostGroup>
          </div>
            </Container>
            <ChatPopUp>
              <Submit></Submit>
              <Cancel></Cancel>
            </ChatPopUp>
        )
    }
}
export default Chatroom;