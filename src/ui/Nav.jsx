import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

import Button from "./Button";
import Phone from "./Phone";
import NavItems from "./NavItems";

import "./Nav.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1199px" });
  const ref = useOutsideClick(handleCloseMenu);

  function handleMenuBtnClick() {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen && isMobile) setShowDropdown(false);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }
  function handleShowDropdown() {
    setShowDropdown(!showDropdown);
  }

  function handleCloseDropdown() {
    setShowDropdown(false);
  }

  return (
    <nav className="nav">
      <Phone />

      {isMobile && (
        <Button
          className={"nav-btn nav-btn--light"}
          aria={"Otwórz menu"}
          onClick={handleMenuBtnClick}
        >
          <HiOutlineBars3 />
        </Button>
      )}

      {isMobile ? (
        <div ref={ref} className={`nav-mobile nav-black ${isMenuOpen ? "nav--show" : ""}`}>
          <div className={`nav-mobile nav-gold ${isMenuOpen ? "nav--show" : ""}`}>
            <div className={`nav-mobile nav-white ${isMenuOpen ? "nav--show" : ""}`}>
              <Button
                className={"nav-btn nav-btn--dark"}
                aria={"Zamknij menu"}
                onClick={handleMenuBtnClick}
              >
                <HiOutlineXMark />
              </Button>

              <NavItems showDropdown={showDropdown} onShowDropdown={handleShowDropdown} onCloseMenu={handleCloseMenu} />
            </div>
          </div>
        </div>
      ) : (
        <NavItems showDropdown={showDropdown} onShowDropdown={handleShowDropdown} onCloseDropdown={handleCloseDropdown} />
      )}
    </nav>
  )
}

export default Nav;
