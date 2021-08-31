import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import MainView from "./pages/MainView";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
