import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import { Fragment } from "react";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav">
          <Link className="logo" to="/">
            <h1 className="title">
              <FontAwesomeIcon className="nav-icon" icon={faCloudMoon} />
              <span className="title__date">DATE</span>
              <span className="title__night">NIGHT</span>
            </h1>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
