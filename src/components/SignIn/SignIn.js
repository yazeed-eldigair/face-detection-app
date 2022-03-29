import React, { useReducer } from "react";
import { GoInfo } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    if (
      this.state.signInEmail.length == 0 ||
      this.state.signInPassword.length == 0
    ) {
      alert("Required field is missing!");
      return;
    }
    fetch("https://secret-headland-04901.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          alert("Wrong credentials. Please try again.");
        }
      });
  };

  onSubmitDemoSignIn = () => {
    this.props.onRouteChange("home");
    this.props.toggleDemoMode(true);
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center br4">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="m3">
                <label className="db fw6 lh-copy f6 mt3" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                // onClick={() => onRouteChange("home")}
                className="mt3 b ph3 pv2 br4 input-reset ba b--black bg-transparent grow pointer f6 dib ba bw1"
                style={{ width: 132 }}
                type="submit"
                value="Sign In"
              />
            </div>
            <div className="demo-row">
              <input
                onClick={this.onSubmitDemoSignIn}
                // onClick={() => onRouteChange("home")}
                className="demo-signin b ph3 pv2 br4 input-reset ba b--black bg-transparent grow pointer f6 dib ba bw1 demo-btn"
                style={{ width: 132 }}
                type="submit"
                value="Demo Sign In"
              />

              <Tooltip title="Sign in without having to register as a user" placement="top" arrow>
                <div
                  className="icon-container"
                >
                  <GoInfo className="grow info-icon" />
                </div>
              </Tooltip>
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer reg"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
