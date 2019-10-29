import React from "react";
export function Header({
  setposition
}) {
  return <header className={"site-header is-sticky " + (setposition ? 'has-fixed' : '')}>
          <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
            <nav className="container">
              <h1 className="navbar-brand">
                <a href="/">
                  <img className="logo" src="/images/site-logo.png" alt="site-logo" />
                  <img className="logo-2" src="/images/site-logo.png" alt="site-logo" />
                </a>
              </h1>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon">
                  <span className="ti ti-align-justify"></span>
                </span>
              </button>
              <div className="navbar-collapse justify-content-end">
                <ul id="menu-onepage-menu" className="navbar-nav">
                  <li><a href="/#what_is_achieved" className="nav-link">What Is Achieved</a></li>
                  <li><a href="/#about" className="nav-link">Why Achieved</a></li>
                  <li><a href="/#browse-roadmap" className="nav-link">Explore projects</a></li>
                  <li><a href="/#who_we_are" className="nav-link">Who We ARE</a></li>
                  <li><a href="/contact" className="nav-link">For projects</a></li>

                </ul>
                <ul className="navbar-nav navbar-btns">

                  {/* <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="/login">Login</a></li> */}
                </ul>
              </div>
            </nav>
          </div>
        </header>;
}
  