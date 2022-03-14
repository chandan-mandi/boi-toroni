import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            {/* ================ Top bar ============ */}
            <nav className=" flex-wrap bg-stone-500 p-3">
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
            </div>

            {/*============ Navbar ===========*/}

            <nav className="flex text-center items-center justify-between flex-wrap bg-zinc-900 p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">
                        Boi-Toroni
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link href="/">
                            <a className="block mt-4 lg:inline-block lg:mt-0  font-semibold text-white mr-4 bg-amber-800 p-4">
                                HOME
                            </a>
                        </Link>
                        <Link href="/books">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold bg-amber-800 p-4">
                                BOOKS
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold bg-amber-800 p-4">
                                CONTACT
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold bg-amber-800 p-4">
                                ABOUT
                            </a>
                        </Link>
                        <Link href="/admin/dashboard">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold bg-amber-800 p-4">
                                DASHBOARD
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
