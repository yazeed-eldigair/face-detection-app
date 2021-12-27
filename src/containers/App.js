import React, { Component } from "react";
import Particles from "react-tsparticles";
import {particlesOptions} from'./particlesOptions';
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log("click");
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} id="tsparticles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        {/* <FaceDetection/>  */}
      </div>
    );
  }
}

export default App;
