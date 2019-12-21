import React, {Component} from "react";
import { Container } from "../components/Grid";
import Nav from "../components/Nav/navBar 2";
import Submit from "../components/Submit";
import Cancel from "../components/Cancel";
import MessageBoard from "../components/MessageBoard";
import ChatPopUp from "../components/ChatPopUp";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header";

class Chatroom extends Component {

    render(){
        return (
            <Container fluid>
            <div className= "container">
            <Nav/>
            <Header/>
            <Jumbotron>
            <MessageBoard>
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
        );
    }
}
export default Chatroom;