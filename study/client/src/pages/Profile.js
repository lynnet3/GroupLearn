import React, {Component} from "react";
import Nav from "../components/Nav/navBar 2";
import Header from "../components/Header";
import ContactBTN from "./components/ContactBTN/contactBTN";
import BioBTN from "./components/BioBTN/BioBTN";
import Bio from "./components/Bio/bio";
import ACCINFO from "./components/ACCINFO/AccInfo";
import BioINFO from "./components/BioINFO/bioInfo";
import SubmitBTN from "./components/Submit Button/index";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { render } from "react-dom";

render(){
    return (
        <Nav></Nav>
        <Header></Header>
        <ProfileCard></ProfileCard>
        <ACCINFO></ACCINFO>
        <Bio>
            <BioINFO></BioINFO>
        </Bio>
        <BioBTN></BioBTN>
        <ContactBTN></ContactBTN>

    )
} 
export default Profile;