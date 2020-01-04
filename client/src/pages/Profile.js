import React, {Component} from "react";
import Nav from "../components/Nav/navBar 2";
import Header from "../components/Header";
import ContactBTN from "../components/ContactBTN";
import BioBTN from "../components/BioBTN";
import Bio from "../components/Bio";
import ACCINFO from "../components/ACCINFO";
import BioINFO from "../components/BioINFO";
import SubmitBTN from "../components/Submit Button/index";
import ProfileCard from "../components/ProfileCard";

class Profile extends Component {



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
        <SubmitBTN></SubmitBTN>
        <ContactBTN></ContactBTN>

        )
    } 
}
export default Profile;