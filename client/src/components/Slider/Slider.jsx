import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import "./slider.css";
import {Pagination} from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <div className="fixed w-[100%] h-[100vh]">
                <div className="mx-auto mt-[600px]">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={1}
                        pagination={{
                            clickable: false,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide >
                            <img src="/images/imagesSlider/smartRackOne.png"/>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => console.log("HELLO")}>
                            <img src="/images/imagesSlider/smartDeskOne.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <img src="/images/imagesSlider/1.png" />
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <img src="/images/imagesSlider/2.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <img src="/images/imagesSlider/1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <img src="/images/imagesSlider/2.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <img src="/images/imagesSlider/1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <div className="fixed rotate-6 text-white font-extrabold">RACK boulduin</div>
                            <img src="/images/imagesSlider/2.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <div className="fixed -rotate-4 text-yellow-400 font-extrabold">DESK smartbuild</div>
                            <img src="/images/imagesSlider/1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <div className="fixed rotate-6 text-blue-600 font-extrabold">DESK smartbuild</div>
                            <img src="/images/imagesSlider/2.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <div className="fixed -rotate-4 text-fuchsia-600 font-extrabold">DESK SMART</div>
                            <img src="/images/imagesSlider/1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <div className="fixed rotate-2 text-green-600 font-extrabold">RACK SMART</div>
                            <img src="/images/imagesSlider/2.png"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Slider;
