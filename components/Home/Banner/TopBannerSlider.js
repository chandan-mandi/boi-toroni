import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const TopBannerSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"

            >
                <SwiperSlide
                    style={{
                        backgroundImage: "url('https://i.ibb.co/1GFQGxq/Thanit-August-75.jpg')"
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black">
                        <div className="content">
                            <h1 className=" text-5xl text-white font-semibold">
                                Your story starts with <span className="text-[#FFA902]">US.</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Are you ready to discover the most exciting and sustainable places to visit in the world?
                            </p>
                            <div className="btnn mt-4">
                                <Link href="/compareBlog">
                                    <a href="#" className="mr-2 bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded">
                                        Compare
                                    </a>
                                </Link>
                                <Link href="/blog">
                                    <a href="#" className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded">
                                        Blog
                                    </a>
                                </Link>
                                {/* <Link href="/compareBlog" passHref> <button className="mr-2 bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded"> Compare </button> </Link> */}
                                {/* <Link href="/blogs" > <a href='#' className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded"> Explore </a> </Link>  */}
                            </div>
                        </div>
                    </span>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: "url('https://i.ibb.co/tm0sP9Z/5836.jpg')"
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black">
                        <div className="content">
                            <h1 className="text-white font-semibold text-5xl">
                                The Worlds Friendliest Travel <span className="text-[#FFA902]">Community!</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Create a Free Travel Blog in 3 Easy Steps
                            </p>
                            <div className="btnn mt-4">
                                {/* button  */}

                            </div>
                        </div>
                    </span>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: "url('https://i.ibb.co/VwR5Ss6/portrait-pensive-young-girl-making-notes.jpg')"
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black">
                        <div className="content">
                            <h1 className="text-white font-semibold text-5xl">
                                We believe in providing quality <span className="text-[#FFA902]">Content.</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                If you have any questions or concerns regarding any content published here, feel free to contact us using the Contact link below.
                            </p>
                            <div className="btnn mt-4">
                                {/* button  */}

                            </div>
                        </div>
                    </span>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TopBannerSlider;