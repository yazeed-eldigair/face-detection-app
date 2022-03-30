import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signIn")}
          className="f3 link dim underline pa3 pointer mb0 mt3"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signIn")}
            className="f3 link dim underline pa3 pointer mb0 mt3"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim underline pa3 pointer mb0 mt3"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
