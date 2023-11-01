import React from "react";
import { NavLink } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <NavLink className="button" to="/">
        <i className="icon-home"></i> Go back in initial page, is better.
      </NavLink>
    </div>
  );
};

export default NotFound;
