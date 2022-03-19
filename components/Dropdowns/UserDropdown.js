import { Menu, Transition } from "@headlessui/react";
// import useAuth from '../../hooks/useAuth';
import Image from "next/image";
import {useRouter} from 'next/router';
import React, { Fragment } from "react";

const UserDropdown = () => {
    const router = useRouter();
    const user = {
        displayName: "Chandan",
        photoURL: "https://i.ibb.co/dbg2G1Q/1642359447115-2.png",
    };
    // const { user, logOut } = useAuth();
const handleLinkDashboard = () => {
    router.push('/admin/dashboard')
}
    return (
        <>
            <Menu as="div">
                <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <Image
                            className="rounded-full"
                            loader={() => user.photoURL}
                            src={user.photoURL}
                            width={50}
                            height={50}
                            alt="User Photo"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-16 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleLinkDashboard}
                                        className={`${
                                            active
                                                ? "bg-violet-500 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Dashboard
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? "bg-violet-500 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default UserDropdown;
