// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function CryptoTestimonialSlider() {
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
                    el: '.testimonial-pagination'
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
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Iruka Akuchi</div>
                                    <div className="position">@iruka-Akuchi</div>
                                </div>
                            </div>
                            <i className="lab la-twitter" />
                        </div>
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="date">7:49 AM · Apr 2, 2022</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Clarke Gillebert</div>
                                    <div className="position">@carla-wildner</div>
                                </div>
                            </div>
                            <i className="lab la-twitter" />
                        </div>
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="date">7:49 AM · Apr 3, 2022</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-03.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Carole Chimako</div>
                                    <div className="position">@Jioke</div>
                                </div>
                            </div>
                            <i className="lab la-twitter" />
                        </div>
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="date">7:49 AM · Apr 5, 2022</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Iruka Akuchi</div>
                                    <div className="position">@iruka-Akuchi</div>
                                </div>
                            </div>
                            <i className="lab la-twitter" />
                        </div>
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="date">7:49 AM · Apr 8, 2022</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Clarke Gillebert</div>
                                    <div className="position">@clarke-gillebert</div>
                                </div>
                            </div>
                            <i className="lab la-twitter" />
                        </div>
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="date">7:49 AM · Apr 2, 2022</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-03.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Carole Chimako</div>
                                    <div className="position">@carole-chimako</div>
                                </div>
                            </div>
                            <i className="lab la-twitter" />
                        </div>
                        <p>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                        <div className="date">7:49 AM · Apr 4, 2022</div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination testimonial-pagination" />
        </>
    )
}
