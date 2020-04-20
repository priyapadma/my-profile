import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.css"

const Header = ({ siteTitle }) => (
  <header>
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-between custom-nav-bar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-profile-nav" aria-controls="my-profile-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand custom-navbar-brand" to="/">
          <span>PS</span>
        </Link>

        <div className="collapse navbar-collapse" id="my-profile-nav">
            <ul className="navbar-nav  custom-nav-bar-nav ml-auto mt-2 mt-lg-0">
              <li className="d-none">
                <Link to="/">
                    {siteTitle}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
            </ul>
      </div>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
