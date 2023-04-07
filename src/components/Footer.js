import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-top flex ">
          <div className="footer-top-text flex-col">
            <h3 className="h3-footer">Most complete job portal.</h3>
            <p className="p-footer">
              Signup and start find your job or talents.
            </p>
          </div>
          <div>
            <button className="btn-square-outline">Looking for a job?</button>
            <button className="btn-square-wide">Post a job</button>
          </div>
        </div>
        <div className="footer-bottom flex-footer">
          <ul className="footer-bottom-col-1">
            <li>
              <img src={logo} alt="Jobi logo" />
            </li>
            <li>
              <address>
                <a href="mailto:jobisupport@company.com" className="underline">
                  jobisupport@company.com
                </a>
              </address>
            </li>
            <li className="footer-social">
              <ul className="flex-footer">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="footer-bottom-col-2 flex-col">
            <li>
              <h5>Links</h5>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul className="footer-bottom-col-3 flex-col">
            <li>
              <h5>Products</h5>
            </li>
            <li>
              <a href="#">Take the tour</a>
            </li>
            <li>
              <a href="#">Live chat</a>
            </li>
            <li>
              <a href="#">Self-service</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Collaboration</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
          <ul className="footer-bottom-col-4 flex-col">
            <li>
              <h5>Legal</h5>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright flex wrapper">
        <div>
          <a href="#">Privacy & Terms</a>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <p>Copyright @2022 jobi inc.</p>
        </div>
        <div>
          <ul className="flex footer-copyright-socials">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
