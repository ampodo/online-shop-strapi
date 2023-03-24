import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.webp";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const today = new Date();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Cosmetology cabinet where you can buy academie cosmetics. Contact me
            if you need skincare procedures. I also provide service which
            includes the injection of amino acids, minerals, enzymes and
            vitamins into the middle layer of the skin.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Narva mnt 2-5, Tallinn, Harjumaa, Estonia
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: (+372) 5049621</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: alina.skalina05@gmail.com </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text" onClick={() => handleClick(1)}>
            DERM ACTE
          </span>
          <span className="text" onClick={() => handleClick(2)}>
            Hydraderm
          </span>
          <span className="text" onClick={() => handleClick(3)}>
            MEN
          </span>
          <span className="text" onClick={() => handleClick(4)}>
            Seve Miracle
          </span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={() => navigate("/")}>
            {" "}
            Home
          </span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span id="copyright">&copy; {today.getFullYear()}</span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
