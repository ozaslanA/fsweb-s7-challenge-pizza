import React from "react";
import "./Components.css";

import { Link, animateScroll as scroll } from "react-scroll";

const scrollMiddle = () => {
  scroll.scrollTo(900, {
    duration: 1000,
    delay: 100,
    smooth: "easeInOutQuart",
  });
};

function Header(props) {
  const { clickButton } = props;
  return (
    <div id="Header-page">
      <div id="menu">
        <div id="menu-text">
          <h1 className="menu-title"> Teknolojik Yemekler </h1>
          <h3 className="menu-subtitle"> Fırsatı kaçırma </h3>
          <h2>
            KOD ACIKTIRIR <br></br>
            PİZZA,DOYURUR
          </h2>
          <Link
            activeClass="active"
            to="middle"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <button className="menu-button" onClick={scrollMiddle}>
              ACIKTIM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
