import "./Banner.scss";
import BannerImg from "../../../assets/hdcalend.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALE</h1>
          <p>
            Unique revitaling beauty treatment embedded into colorful calender.
            24 DAYS of professional care at home to restore skin&nbsp;condition.
          </p>
          <div className="action">
            <div className="banner-action-v1">Read More</div>
            <div className="banner-action-v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
