import React from 'react';
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./components/LogInForm/Login";
import LogInForm from "./components/LogInForm/index";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/user/:id" component={Main} />
          <Route exact path="/subjects/:id" component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
