import React from "react";
import { NavLink } from "react-router-dom";
import "./Components.css";

import Logo1 from "../Assets/adv-aseets/icons/1.svg";
import Logo2 from "../Assets/adv-aseets/icons/2.svg";
import Logo3 from "../Assets/adv-aseets/icons/3.svg";
import Logo4 from "../Assets/adv-aseets/icons/4.svg";
import Logo5 from "../Assets/adv-aseets/icons/5.svg";
import Logo6 from "../Assets/adv-aseets/icons/6.svg";

function Page() {
  return (
    <div id=" PageAll">
      <div id="all-container">
        <div id="left-container">
          <div id="card-one">
            <div id="card-text">
              <h1 id="özel-Lezzetus-h1">
                Özel <br></br> Lezzetus
              </h1>
              <NavLink to="/products">
                <button className="card-button">SİPARİŞ VER</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div id="right-container">
          <div id="card-two">
            <div id="card-text-two">
              <h1 id="hackathlon-burger">
                Hackathlon <br></br> Burger Menü
              </h1>
              <NavLink to="/products">
                <button className="card-button">SİPARİŞ VER</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div id="left-container">
          <div id="card-three">
            <div id="card-text-three">
              <h1 id="npm-kurye">
                Çooook hızlı <br></br> npm gibi kurye{" "}
              </h1>
              <NavLink to="/products">
                <button className="card-button">SİPARİŞ VER</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id="hot-menu">
        <div id="hot-menu-title-one">
          <p>en çok paketlenen ürünler</p>

          <div id="hot-menu-title-two">
            <p>Acıktıran Kodlara Doyuran Lezzetler</p>
          </div>
        </div>
      </div>
      <div id="hot-menu-nav">
        <nav id="hot-menu-nav-title">
          <ul id="hot-menu-nav-ul">
            <li>
              <NavLink to="/">
                <img id="icon" src={Logo1} alt="logo" />
                Ramen
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Logo2} alt="logo" />
                Pizza
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Logo3} alt="logo" />
                Burger
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Logo4} alt="logo" />
                French Fries
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Logo5} alt="logo" />
                Fast Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Logo6} alt="logo" />
                Soft Drinks
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Page;
