import React from 'react';
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav/navBar 2";
import Login from "./components/LogInForm/Login";
import UserGreet from './components/UserGreet/userGreet';
import SubjectBar from './components/SubjectBar/subjectBar';
import Bookshelf2 from "../src/Bookshelf2.jpg";

function App() {
  return (
    <div className="container">
    <div>
    <NavBar/>
    <UserGreet/>
    <SubjectBar/> 
    </div>
    </div>
  );
}

export default App;
