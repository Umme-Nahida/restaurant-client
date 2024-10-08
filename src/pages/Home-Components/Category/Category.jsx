import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle
        subTitle={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"} 
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h4 className="text-2xl text-center text-white -mt-10 ">Salads</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h4 className="text-2xl text-center text-white -mt-10 ">PIZZA</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h4 className="text-2xl text-center text-white -mt-10 ">Soups</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h4 className="text-2xl text-center text-white -mt-10 ">Desserts</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h4 className="text-2xl text-center text-white -mt-10 ">Salads</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
