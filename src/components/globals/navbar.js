import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navBarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "Home" },
      { id: 2, path: "/acerca", text: "Acerca De" },
    ],
  }

  navBarHandler = () => {
    let { navBarOpen } = this.state
    navBarOpen
      ? this.setState({ navBarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navBarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    let { css, links } = this.state
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navBarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={css}>
          <ul className="navbar-nav mx-auto">
            {links.map(link => (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cart-icon snipcart-checkout" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
