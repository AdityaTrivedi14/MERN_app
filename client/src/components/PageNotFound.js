import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div id="notFound">
        <div className="notFound">
          <div className="notFound-404">
            <h1>404</h1>
          </div>
          <h2>Oopss!... You hit the wrong route</h2>
          <p className="mb-5">
            The page you are looking for might have been removed/changed or is
            temporarily unavailable.
          </p>
          <NavLink to="/">Back to Homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
