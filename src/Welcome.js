import React from "react";
import { Redirect, Link, useHistory } from "react-router-dom";

export const Welcome = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/services");
  };

  return (
    <div className="welcome-wrapper">
      <div className="welcome-outer">
        <div className="welcome-inner" onClick={handleClick}>
          Queue
        </div>
      </div>
    </div>
  );
};
