import React from 'react';
import Main from "./pages/Main";
import MakePost from "./pages/MakePost"
import FrontPage from "./pages/FrontPage";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={FrontPage}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/subjects/Math" component={MakePost} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;