import React, { Component } from "react";
import Nav from "../components/Nav/navBar 2";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import submit from "../components/Submit";
import Cancel from "../components/Cancel";
import MessageBoard from "../components/MessageBoard";
import ChatPopup from "../components/ChatPopUp";
import Jumbotron from "../components/Jumbotron";

class Chatroom extends Component {

    render(){
        return (
            <div className= "container">
            <NavBar/>
            <Header/>
            </div>
        
        );
    }
}

export default Chatroom;