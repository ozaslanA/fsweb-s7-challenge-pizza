import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import Order from "./components/Order";

function App() {
  return (
    <div className={StyleSheet.contaner}>
      <div className="App">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza">
            <Form />
          </Route>
          <Route path="/order/:id">
            <Order />
          </Route>
        </Router>
      </div>
    </div>
  );
}
export default App;
