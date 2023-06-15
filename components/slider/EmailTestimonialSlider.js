// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function EmailTestimonialSlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={false}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.testimonial-pagination'
                }}
                navigation={{
                    prevEl: ".navigation-prev",
                    nextEl: ".navigation-next",
                }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                // }}
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="item">
                        <div className="content">
                            <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                            <div className="author align-right">- Max Smith -</div>
                        </div>
                        <div className="thumb">
                            <img src="/assets/images/he-10.png" alt="Image" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <div className="content">
                            <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                            <div className="author align-right">- Max Smith -</div>
                        </div>
                        <div className="thumb">
                            <img src="/assets/images/he-10.png" alt="Image" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <div className="content">
                            <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                            <div className="author align-right">- Max Smith -</div>
                        </div>
                        <div className="thumb">
                            <img src="/assets/images/he-10.png" alt="Image" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination testimonial-pagination" />
            <div className="swiper-button-next navigation-next">
                <svg width={49} height={8} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.354 4.354a.5.5 0 000-.708L45.172.464a.5.5 0 10-.707.708L47.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h48v-1H0v1z" fill="var(--sala-neutral-normal, #333)" /></svg>
            </div>
            <div className="swiper-button-prev navigation-prev">
                <svg width={49} height={8} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 4.354a.5.5 0 010-.708L3.828.464a.5.5 0 11.708.708L1.707 4l2.829 2.828a.5.5 0 11-.708.708L.646 4.354zM49 4.5H1v-1h48v1z" fill="var(--sala-neutral-normal, #333)" /></svg>
            </div>
        </>
    )
}
