import React from "react";
import Link from "next/link";
import MainNavbar from "components/Navbar/MainNavbar";

const Header = () => {
    return (
        <div>
            {/* ================ Top bar ============ */}
            {/* <nav className=" flex-wrap bg-stone-500 p-3">
                <div className="w-full block flex-grow lg:flex lg:w-auto flex justify-start">
                    <div className="text-sm lg:flex-grow ml-20">
                        <Link href="/contact">
                            <a className="block mt-4 lg:inline-block lg:mt-0  font-semibold text-white mr-4">
                                Contact US
                            </a>
                        </Link>
                        <span className="block mt-4 lg:inline-block lg:mt-0  font-semibold text-white mr-4">
                            |
                        </span>

                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold">
                            FAQ
                        </a>
                    </div>

                    <div className="w-full block flex-grow lg:flex lg:w-auto ">
                        <div className="text-sm lg:flex-grow flex justify-end mr-20">
                            <Link href="/login">
                                <a className="block mt-4 lg:inline-block lg:mt-0  font-semibold text-white mr-4 bg-amber-800 border-none rounded-lg tracking-wide p-1 ">
                                    Login/Register
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="">
                <div className="container flex justify-center px-4 sm:px-6 lg:px-8">
                    <h1 className="font-mono text-2xl mt-6 mb-6 italic text-center">
                        Boi-Toroni
                    </h1>
                    <div className="relative">
                        {" "}
                        <input
                            type="text"
                            className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none border-2 mt-4 ml-2 border-orange-200"
                            placeholder="Search anything..."
                        />
                        <div className="absolute top-4 right-3 mt-4">
                            {" "}
                            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
                        </div>
                    </div>
                </div>
            </div> */}

            {/*============ Navbar ===========*/}

            <MainNavbar />
        </div>
    );
};

export default Header;
