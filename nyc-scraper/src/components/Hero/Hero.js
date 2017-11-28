import React from "react";
import "./Hero.css";

const Hero = props =>
  <div className="jumbotron">
    {props.children}
  </div>

export default Hero;