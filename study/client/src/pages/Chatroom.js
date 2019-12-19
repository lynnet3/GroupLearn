import React, { Component } from "react";
import Nav, {Component} from "../components/Nav/navBar 2";
import submit, {Component} from "./components/Submit Button/index";
import Cancel, {component} from "./components/Cancel Button/index";
import MessageBoard, {component} from "./components/MessageBoard/index";
import ChatPopup from "./components/ChatPopUp/index";
import Jumbotron from "./components/Jumbotron/index";

class Chatroom extends Component {

    render(){
        return (
            <div className= "container">
            <navBar/>
            <Header/>
            </div>
        
        );
    }
}