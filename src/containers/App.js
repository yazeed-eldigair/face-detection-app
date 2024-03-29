import React, { Component } from "react";
import Particles from "react-tsparticles";
import { particlesOptions } from "./particlesOptions";
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "../components/FaceDetection/FaceDetection";
import Examples from "../components/Examples/Examples";
import "./App.css";

const initialState = {
  input: "",
  imageURL: "",
  box: {},
  route: "signIn",
  isSignedIn: false,
  demoMode: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signIn",
      isSignedIn: false,
      demoMode: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    if(this.state.input.length==0) return;
    this.setState({ imageURL: this.state.input });
    fetch("https://secret-headland-04901.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && !this.state.demoMode) {
          fetch("https://secret-headland-04901.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
          
            .then((res) => res.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        } else if (this.state.demoMode){
          let count = this.state.user.entries + 1;
          this.setState(Object.assign(this.state.user, { entries: count}));
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      botRow: height - face.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onRouteChange = (route) => {
    if (route == "signIn") {
      this.setState({ initialState });
      this.setState({ isSignedIn: false });
      this.toggleDemoMode(false);
    } else if (route == "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  toggleDemoMode = (value) => {
    this.setState({ demoMode: value});
  }

  render() {
    const { isSignedIn, imageURL, box, route, demoMode } = this.state;
    return (
      <div className="App">
        {/* <Particles
          className="particles"
          params={particlesOptions}
          id="tsparticles"
        /> */}
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        <Logo />
        {route == "home" && demoMode == false ? (
          
          <div className="container">
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            {/* <Examples /> */}
            <FaceDetection imageURL={imageURL} box={box} />
          </div>

        ) : route == "home" && demoMode == true ? (

          <div className="container">
            <Rank
              name='Hello'
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            {/* <Examples /> */}
            <FaceDetection imageURL={imageURL} box={box} />
          </div>

        ) : route == "signIn" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} toggleDemoMode={this.toggleDemoMode} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
