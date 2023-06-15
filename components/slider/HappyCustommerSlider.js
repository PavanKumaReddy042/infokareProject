// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";


export default function EmailTestimonialSlider() {
    return (
        <>
            <Swiper
                modules={[ Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={false}
                loop={true}
                pagination={{
                    clickable: true,
                    el: '.testimonial-pagination'
                }}
                className="swiper-wrapper block-elasticstack"
            >
                <SwiperSlide className="elasticstack">
                    <div className="item">
                        <div className="thumb">
                            <img src="/assets/images/hea-02.png" alt="Image" />
                        </div>
                        <div className="content">
                            <div className="quote">
                                <img src="/assets/images/hea-05.png" alt="Quote" />
                            </div>
                            <p>Max helped me a lot in the website building process. In the beginning I really had no idea. I didn't even know what I liked. But with enthusiastic help and advice, I got what I needed. I encourage you to experience the 5-star service here with very good support.</p>
                            <div className="name">John Smith</div>
                            <div className="website">Exiclub.com</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="elasticstack">
                    <div className="item">
                        <div className="thumb">
                            <img src="/assets/images/hea-02.png" alt="Image" />
                        </div>
                        <div className="content">
                            <div className="quote">
                                <img src="/assets/images/hea-05.png" alt="Quote" />
                            </div>
                            <p>Max helped me a lot in the website building process. In the beginning I really had no idea. I didn't even know what I liked. But with enthusiastic help and advice, I got what I needed. I encourage you to experience the 5-star service here with very good support.</p>
                            <div className="name">John Smith</div>
                            <div className="website">Exiclub.com</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="elasticstack">
                    <div className="item">
                        <div className="thumb">
                            <img src="/assets/images/hea-02.png" alt="Image" />
                        </div>
                        <div className="content">
                            <div className="quote">
                                <img src="/assets/images/hea-05.png" alt="Quote" />
                            </div>
                            <p>Max helped me a lot in the website building process. In the beginning I really had no idea. I didn't even know what I liked. But with enthusiastic help and advice, I got what I needed. I encourage you to experience the 5-star service here with very good support.</p>
                            <div className="name">John Smith</div>
                            <div className="website">Exiclub.com</div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="swiper-pagination testimonial-pagination" />
        </>
    )
}
