// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function CoworkingGallerySlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.gallery-pagination'
                }}
                navigation={{
                    prevEl: ".navigation-prev",
                    nextEl: ".navigation-next",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/cw-08.jpeg" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/cw-09.jpeg" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/cw-10.jpeg" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/cw-11.jpeg" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/cw-12.jpeg" alt="Image" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination gallery-pagination" />
            <div className="swiper-button-next navigation-next" />
            <div className="swiper-button-prev navigation-prev" />
        </>
    )
}
