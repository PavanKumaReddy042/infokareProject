// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function CareerGallerySlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
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
                        <img src="/assets/images/gallery-06.jpeg" alt="Gallery" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/gallery-07.jpeg" alt="Gallery" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/gallery-08.jpeg" alt="Gallery" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/gallery-09.jpeg" alt="Gallery" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/gallery-10.jpeg" alt="Gallery" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <img src="/assets/images/gallery-11.jpeg" alt="Gallery" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination block-gallery-pagination" />
        </>
    )
}
