import Link from 'next/link'
import React from 'react'

const ContactUsBanner = () => {
  return (
    <div className="h-[400px] w-screen">
    {/* inner container */}
    <div className="h-full w-screen flex items-center justify-center text-white"  style={{background: `url(/contactBanner.jpg) no-repeat center`, backgroundSize:'cover', }}>
         {/* text & link */}
    <div>
    <h1 className="text-4xl">Contact Us</h1>
        <Link  href="/">
            <a className="mr-4 inline-block">
                Home
            </a>
        </Link>
        <span>/</span>
        <Link href="/contactUs">
            <a className="ml-4 text-orange-300">
                Contact Us
            </a>
        </Link>
    </div>

    </div>


     {/* skills  & about text*/}
   
    

    </div>
  )
}

export default ContactUsBanner