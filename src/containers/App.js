import React, { Component } from "react";
import Particles from "react-tsparticles";
import {particlesOptions} from'./particlesOptions';
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} id="tsparticles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceDetection/>  */}
      </div>
    );
  }
}

export default App;
