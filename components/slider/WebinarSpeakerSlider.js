// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function WebinarSpeakerSlider() {
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
                    <div className="member-box align-center">
                        <div className="inner">
                            <div className="member-avatar">
                                <div className="avatar-inner">
                                    <img src="/assets/images/hw-09.png" alt="Member" />
                                </div>
                            </div>
                            <div className="member-content">
                                <h4 className="name">Jeff Booth</h4>
                                <div className="position">Founder &amp; CEO of Rejuves</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="member-box align-center">
                        <div className="inner">
                            <div className="member-avatar">
                                <div className="avatar-inner">
                                    <img src="/assets/images/hw-10.png" alt="Member" />
                                </div>
                            </div>
                            <div className="member-content">
                                <h4 className="name">Ben Goertzel</h4>
                                <div className="position">CTO of Singuloritinet</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="member-box align-center">
                        <div className="inner">
                            <div className="member-avatar">
                                <div className="avatar-inner">
                                    <img src="/assets/images/hw-11.png" alt="Member" />
                                </div>
                            </div>
                            <div className="member-content">
                                <h4 className="name">Dominic Williams</h4>
                                <div className="position">Leader of BNB Technology</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="member-box align-center">
                        <div className="inner">
                            <div className="member-avatar">
                                <div className="avatar-inner">
                                    <img src="/assets/images/hw-09.png" alt="Member" />
                                </div>
                            </div>
                            <div className="member-content">
                                <h4 className="name">Jeff Booth</h4>
                                <div className="position">Founder &amp; CEO of Rejuves</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="member-box align-center">
                        <div className="inner">
                            <div className="member-avatar">
                                <div className="avatar-inner">
                                    <img src="/assets/images/hw-10.png" alt="Member" />
                                </div>
                            </div>
                            <div className="member-content">
                                <h4 className="name">Ben Goertzel</h4>
                                <div className="position">CTO of Singuloritinet</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="member-box align-center">
                        <div className="inner">
                            <div className="member-avatar">
                                <div className="avatar-inner">
                                    <img src="/assets/images/hw-11.png" alt="Member" />
                                </div>
                            </div>
                            <div className="member-content">
                                <h4 className="name">Dominic Williams</h4>
                                <div className="position">Leader of BNB Technology</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex flex-align-c">
                <div className="swiper-pagination block-gallery-pagination" />
            </div>
        </>
    )
}
