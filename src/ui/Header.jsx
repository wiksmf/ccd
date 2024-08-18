import { Link } from "react-router-dom";

import Logo from "./Logo";
import Nav from "./Nav";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="mw-wrapper">
        <div className="header-wrapper">
          <Link to="/" className="logo-link">
            <Logo />
          </Link>

          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;
