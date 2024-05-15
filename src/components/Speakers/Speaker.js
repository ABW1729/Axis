import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const Speaker = () => {
  return (
    <div className="">
        <React.Suspense fallback={<div>Loading...</div>}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/4.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/5.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/6.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/7.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/8.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/9.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/10.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/11.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/12.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/13.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/14.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/15.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/16.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/17.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/18.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/19.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      </React.Suspense>
    </div>
  );
};
export default Speaker;
