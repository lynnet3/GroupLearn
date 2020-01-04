import React from 'react';
import Chat from "./pages/Chatroom"
import FrontPage from "./pages/FrontPage";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FrontPage}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/subjects/:subject" component={Chat} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;