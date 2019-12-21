import React from "react";
import Nav from "../components/Nav/navBar 2";
import Submit from "./components/Submit Button/index";
import Cancel from "./components/Cancel Button/index";
import MessageBoard from "./components/MessageBoard/index";
import ChatPopup from "./components/ChatPopUp/index";
import Jumbotron from "./components/Jumbotron/index";
import Header from "./components/Header/index";

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
            <ChatPopup>
            <Submit>
            </Submit>
           <Cancel>
         </Cancel>
            </ChatPopup>

            </div>
            </Container>
        );
    }
}
export default Chatroom;