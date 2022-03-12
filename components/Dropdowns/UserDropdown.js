import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
// import useAuth from '../../hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';


const UserDropdown = () => {
    const user = {displayName : "Chandan", photoURL: "https://i.ibb.co/dbg2G1Q/1642359447115-2.png"}
    // const { user, logOut } = useAuth();
    return (
        <>
            <Menu as="div">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image className='rounded-full' loader={() => user.photoURL} src={user.photoURL} width={50} height={50}/>
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
                        <Menu.Items className="popover-dashboard py-4 origin-top-right absolute right-10 mt-2 w-48 rounded-md shadow-lg pt-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col justify-center">
                          <Menu.Item>
                              <p
                                className='block px-4 py-2 text-sm text-purple-900'
                              >
                                {user?.displayName}
                              </p>
                          </Menu.Item>
                          <Menu.Item>
                              <Link
                                to="/profile"
                                className='block px-4 py-2 text-sm text-gray-700'
                              >
                                View Profile
                              </Link>
                          </Menu.Item>
                          <Menu.Item>
                              <Link
                                to="/dashboard"
                                className='block px-4 py-2 mb-4 text-sm text-gray-700'
                              >
                                Dashboard
                              </Link>
                          </Menu.Item>
                          <Menu.Item>
                              {/* <button className="bg-red-500 hover:bg-red-700 text-white text-center py-1 px-2 w-3/4 mx-auto rounded-full" onClick={logOut}>Log out</button> */}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
        </>
    );
};

export default UserDropdown;