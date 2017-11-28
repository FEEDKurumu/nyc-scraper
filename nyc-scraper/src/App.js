import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div className="container">
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>
      <Footer />
    </div>
  </Router>

export default App;