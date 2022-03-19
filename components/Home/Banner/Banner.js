import React from "react";
import Image from "next/image";
import book from "../../../public/images/Book_1.PNG";
import TopBannerSlider from "./TopBannerSlider";

const Banner = () => {
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto ">
            <div className="grid grid-cols-3 gap-4 bg-[#F2F0EE] ">
                <div className="col-span-2 ...">
                    {/* banner slider  */}
                    <TopBannerSlider />
                    {/* <Image src={book} width={800} height={400} alt="" /> */}
                </div>

                <div className="col-span-1">
                    <h1 className="font-serif antialiased  text-4xl mt-4">
                        Welcome to Boi <span className="font-extrabold text-[#FF5622]">Toroni</span> world!
                    </h1>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Banner;
