import React, { Component } from "react";
import Clarifai, { COLOR_MODEL } from "clarifai";
import Particles from "react-tsparticles";
import { particlesOptions } from "./particlesOptions";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "../components/FaceDetection/FaceDetection";

import "./App.css";

const app = new Clarifai.App({
  apiKey: "960ce0384bbe4c36a0c7f0dc9655ee25",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: ""
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function (err) {
          // error occured
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particlesOptions}
          id="tsparticles"
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceDetection imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
