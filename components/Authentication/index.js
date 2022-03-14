import React, { useEffect, useState } from "react";
import { userAccessToken, fetchUser } from '../Utils/fetchUserDetails';
import { useRouter } from "next/router"
import { IoLogOut } from 'react-icons/io5'

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) return router.push("/login")
    const [userInfo] = fetchUser();
    console.log(userInfo);
    setUser(userInfo);
  }, []);

  const signOut = () => {
    localStorage.clear();
    router.push("login")
  }

  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className='w-1/3 h-auto p-4 bg-shite shadow-md rounded-md flex justify-start
          item-center relative'>

        <div>
          <IoLogOut fontSize={30}
            className="absolute top-3 right-3 cursor-pointer text-gray-500"
            onClick={signOut}
          />
        </div>


        <img src={user?.photoURL} alt="" className=" rounded-md shadow-md" />

        <p className="text-2xl font-mono font-semibold ml-2">
          {user?.displayName}
          <span className="block text-xs font-serif font-normal">
            {user?.email}
          </span>
        </p>

      </div>
    </div>
  );
}

export default Index;