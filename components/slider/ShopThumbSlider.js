
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ShopThumbSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>

                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={{
                            prevEl: ".control-navigation-prev",
                            nextEl: ".control-navigation-next",
                        }}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper-wrapper"
                    >
                        <SwiperSlide>
                            <div className="item">
                                <img src="/assets/images/product-gallery.png" alt="Product" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="/assets/images/product-gallery-01.png" alt="Product" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="/assets/images/product-gallery-02.jpeg" alt="Product" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="/assets/images/product-gallery-03.jpeg" alt="Product" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div></div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper-wrapper product-slider-thumbnail"
                    >
                        <SwiperSlide>
                            <div className="item zoom">
                                <img src="/assets/images/product-gallery.png" alt="Product" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item zoom">
                                <img src="/assets/images/product-gallery-01.png" alt="Product" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item zoom">
                                <img src="/assets/images/product-gallery-02.jpeg" alt="Product" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item zoom">
                                <img src="/assets/images/product-gallery-03.jpeg" alt="Product" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
        </>
    );
}
