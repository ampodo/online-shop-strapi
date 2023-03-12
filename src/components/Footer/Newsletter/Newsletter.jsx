import React from "react";
import {
  FaFacebookF,
  FaInstagram,

} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="big-text">Sign up to receive latest&nbsp;updates</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy&nbsp;Policy
        </span>
        <span className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
