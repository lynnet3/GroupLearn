import React from "react";
import Nav from "../components/Nav/navBar 2";
import submit from "./components/Submit Button/index";
import Cancel from "./components/Cancel Button/index";
import MessageBoard from "./components/MessageBoard/index";
import ChatPopup from "./components/ChatPopUp/index";
import Jumbotron from "./components/Jumbotron/index";
import Header from "./components/Header/index";

class Chatroom extends Component {

    render(){
        return (
            <div className= "container">
            <Nav/>
            <Header/>
            <Jumbotron>
            </Jumbotron>
            <MessageBoard>
            </MessageBoard>
            <ChatPopup>
            <Submit>
           <Cancel>
         </Cancel>
            </Submit>
            </ChatPopup>


            </div>
        
        );
    }
}