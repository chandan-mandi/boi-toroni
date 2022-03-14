import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ContactUsBanner from '../../components/contactUs/contactUsBanner/contactUsBanner'
import ContactUsInput from '../../components/contactUs/contactUsInput/contactUsInput'

const ContactUs
 = () => {

  const contactInfos = [
    {id:1, contactType: 'address', contact: 'Dhaka, Mirpur', icon: faLocationDot },
    {id:2, contactType: 'Phone Number', contact: '+88 01234567891', icon: faPhone },
    {id:3, contactType: 'Email Address', contact: 'boibori@web.com', icon: faEnvelope },
  ]
  return (
    <div>
        <ContactUsBanner/>

      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 my-14 gap-10 xl:gap-20'>
        {/* contact form */}
        <div >
          <h2 className='text-3xl text-gray-700 uppercase mb-4'>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea officia? Blanditiis iure necessitatibus, molestias voluptatibus tempora repudiandae sequi rerum, nulla nemo excepturi, temporibus libero sapiente illum architecto. Vero, veritatis.
          </p>

<form className='mt-5' onSubmit={(e) => e.preventDefault() }>

    {/* name */}
    <ContactUsInput label="Name" type="text" name="name"/>
    {/* email */}
    <ContactUsInput label="Email" type="email" name="email"/>
    {/* subject */}
    <ContactUsInput label="Subject" type="text" name="subject"/>
    {/* message */}

<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea id="message" rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Write your message here ..."></textarea>

<button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 mt-5">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Send Message
  </span>
</button>
</form>

        </div>

        {/* office info */}
        <div>
        <h2 className='text-3xl text-gray-700 uppercase mb-4'>Office info</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam porro mollitia quaerat ea libero maiores ipsam eum doloribus laudantium consequatur, odit voluptatibus est error optio aut architecto? Ipsum, eum.</p>

          {/* contacts */}
          <div className="mt-8">
            {
              contactInfos.map(contactInfo => (
                <div className="flex items-center justify-start mb-3" key={contactInfo.id}>
                  {/* icon */} 
                  <div className="pr-5">
                    <FontAwesomeIcon className='text-xl' icon={contactInfo.icon}/>
                  </div>
                  {/* title and address */}
                  <div>
                    <h4 className="uppercase text-xl">{contactInfo.contactType}</h4>
                    <p>{contactInfo.contact}</p>
                  </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default ContactUs
