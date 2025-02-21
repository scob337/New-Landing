import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // ✅ استيراد الأيقونات

const Partner = [
  "https://www.be-group.com/uploads/brands/source/20614.png",
  "https://www.be-group.com/uploads/brands/source/57938.png",
  "https://www.be-group.com/uploads/brands/source/45146.webp",
  "https://www.be-group.com/uploads/brands/source/68213.webp",
  "https://www.be-group.com/uploads/brands/source/37477.webp",
  "https://www.be-group.com/uploads/brands/source/59671.webp",
  "https://www.be-group.com/uploads/brands/source/39849.webp",
  "https://www.be-group.com/uploads/brands/source/71900.webp",
  "https://www.be-group.com/uploads/brands/source/72889.webp",
];

const PartnersSlider = () => {
  return (
    <div className="text-white w-[90%] mx-auto px-4 relative">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        centeredSlides={true}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        loop={true}
        modules={[Navigation, Autoplay]}
        initialSlide={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        centerInsufficientSlides={false}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
          1440: { slidesPerView: 5 },
        }}
      >
        {Partner.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              src={el}
              alt="Partner"
              className="w-[150px] m-auto h-[150px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute left-[-30px] top-1/2 -translate-y-1/2 bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-700 transition">
        <IoIosArrowBack className="text-white text-2xl" />
      </button>
      <button className="custom-next absolute right-[-30px] top-1/2 -translate-y-1/2 bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-700 transition">
        <IoIosArrowForward className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default PartnersSlider;
