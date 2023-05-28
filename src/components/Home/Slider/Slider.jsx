import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import Miracle from "../../../assets/image.webp";
import Blue from "../../../assets/blue.webp";
import styles from "./Slider.module.scss";

const Slider = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 1000, // targeting products section
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  const handleClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const swiperRef = useRef(null);

  return (
    <div className={styles.container}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src={Miracle} alt="" />
          <button className={styles.button} onClick={handleScroll}>
            CATALOG
          </button>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <img src={Blue} alt="" />
          <button className={styles.button} onClick={() => handleClick(1)}>
            DISCOVER
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
