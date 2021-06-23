import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const ourAddress = [
    { name: "Uttara - 1200 Dhaka", link: "//google.com/map" },
    { name: "Bangladesh", link: "//google.com/map" },
  ];
  const terms = [
    { name: "Privacy", link: "/emergency" },
    { name: "Help", link: "/checkup" },
    { name: "FAQ", link: "/personal-treatment" },

    { name: "Check Up", link: "/checkup" }
  ];
  const AboutUs = [
    { name: "Blog", link: "/blog" },
    { name: "Refund Policy", link: "/refundPolicy" },
    { name: "Contact Us", link: "/contactUs" },
    { name: "Demo", link: "/demo" },
    { name: "Check Up", link: "/checkup" }
  ];
  return (
    <footer className="footer-area">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={2} menuTitle="About Us" menuItems={AboutUs} />
          <FooterCol key={3} menuTitle="Terms" menuItems={terms} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <p>018185986567</p>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
        <small>Designed & Build by <a style={{color:'rgb(26 210 14)'}}>ASM Mostafa Rafid</a></small> <br />
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
