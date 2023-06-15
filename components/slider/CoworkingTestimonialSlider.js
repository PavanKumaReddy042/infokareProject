// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function CoworkingTestimonialSlider() {
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
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                    <i className="las la-quote-right" />
                                </div>
                                <div className="info">
                                    <div className="name">Iruka Akuchi</div>
                                    <div className="position">Assistant Post Order, Wipple</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                    <i className="las la-quote-right" />
                                </div>
                                <div className="info">
                                    <div className="name">Erika Mateo</div>
                                    <div className="position">COO Tinuclues</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                    <i className="las la-quote-right" />
                                </div>
                                <div className="info">
                                    <div className="name">Anna Ly</div>
                                    <div className="position">Copywriter Vimeo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination align-left testimonial-pagination" />
        </>
    )
}
