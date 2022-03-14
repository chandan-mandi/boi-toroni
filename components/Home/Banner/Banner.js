import React from "react";
import Image from "next/image";
import book from "../../../public/images/Book_1.PNG";

const Banner = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 ...">
                    <Image src={book} width={800} height={400} alt="" />
                </div>

                <div className="col-span-1">
                    <h1 className="font-serif antialiased hover:font-sans text-4xl mt-4">
                        Welcome to Boi Toroni
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
