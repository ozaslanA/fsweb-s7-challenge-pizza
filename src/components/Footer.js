import React from "react";
import "./Components.css";

import Footer1 from "../Assets/adv-aseets/icons/icon-1.png";
import Footer2 from "../Assets/adv-aseets/icons/icon-2.png";
import Footer3 from "../Assets/adv-aseets/icons/icon-3.png";
import instagram1 from "../Assets/adv-aseets/insta/li-0.png";
import instagram2 from "../Assets/adv-aseets/insta/li-1.png";
import instagram3 from "../Assets/adv-aseets/insta/li-2.png";
import instagram4 from "../Assets/adv-aseets/insta/li-3.png";
import instagram5 from "../Assets/adv-aseets/insta/li-4.png";
import instagram6 from "../Assets/adv-aseets/insta/li-5.png";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-container">
        <div className=" footer-main-container-one">
          <div className="footer-contents">
            <div className="footer-bas">
              <h1>Teknolojik Yemekler</h1>
              <p>
                <img className="footer-img" src={Footer1} />
                341 Londonderry Road, İstanbul Türkiye
              </p>
              <p>
                <img className="footer-img" src={Footer2} />
                aciktim@teknolojikyemekler.com
              </p>
              <p>
                <img className="footer-img" src={Footer3} /> +90 216 123 45 67
              </p>
            </div>
            <div className="footer-contents">
              <div classname="footer-menu">
                <h2>Sıccacık Menüler</h2>
                <p>Terminal Pizza</p>
                <p>5 Kişilik Hackathlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
              </div>
            </div>

            <div className="footer-contents">
              <div className="footer-contents-instagram">
                <h2>Instagram</h2>
                <img style={{ padding: "5px" }} src={instagram1}></img>
                <img style={{ padding: "5px" }} src={instagram2}></img>
                <img style={{ padding: "5px" }} src={instagram3}></img>
                <img style={{ padding: "5px" }} src={instagram4}></img>
                <img style={{ padding: "5px" }} src={instagram5}></img>
                <img style={{ padding: "5px" }} src={instagram6}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
