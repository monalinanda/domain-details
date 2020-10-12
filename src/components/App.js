import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDetails from "./CardDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CardDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
