// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function FitnessGallerySlider() {
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
                    el: '.block-gallery-pagination'
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
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/hf-12.png" alt="Gallery" />
                        <h3 className="title">Bench Press</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/hf-13.png" alt="Gallery" />
                        <h3 className="title">Plank</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/hf-14.png" alt="Gallery" />
                        <h3 className="title">Warm Up</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/hf-15.png" alt="Gallery" />
                        <h3 className="title">Belly</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/hf-16.png" alt="Gallery" />
                        <h3 className="title">Mountain Climber</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex flex-align-c">
                <div className="swiper-pagination block-gallery-pagination" />
                <div className="swiper-button-prev navigation-prev" />
                <div className="swiper-button-next navigation-next" />
            </div>
        </>
    )
}
