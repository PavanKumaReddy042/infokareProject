// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function EmailGallerySlider() {
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
                    el: '.gallery-pagination'
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
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/he-07.png" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/he-08.png" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/he-09.png" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/he-07.png" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/he-08.png" alt="Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/he-09.png" alt="Image" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination gallery-pagination" />
        </>
    )
}
