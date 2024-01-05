import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import Order from "./components/Order";
import Success from "./components/Success";
import Products from "./components/Data/Products";
function App() {
  return (
    <div className="container">
      <div className="App">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza">
            <Form />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/order/:id">
            <Order />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Router>
      </div>
    </div>
  );
}
export default App;
