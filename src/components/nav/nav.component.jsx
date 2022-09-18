import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav">
        <h1>NAVBAR</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
