import { faFacebookF, faLinkedinIn, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import src from '../../../public/legend2.jpeg';
import AboutUsTitle from '../aboutUsTitle/aboutUsTitle';

const AboutOurTeam
 = () => {
   const members = [
    
     {id:1, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:2, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:3, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:3, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:4, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:5, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:6, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
     {id:7, name: 'Shahriar Hoq Shubho', position: 'Chairman', src:src },
   ]

   const socials = [
     faFacebookF, faLinkedinIn, faTwitter, faYahoo
   ]
  return (
    <div className='my-20'>
        <AboutUsTitle>
        Library Board Members
        </AboutUsTitle>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-5 mt-10'>
        {
          members.map(member => (
           <div className='flex items-center justify-center flex-col shadow-md p-5 rounded-md' key={member.id}>
              <Image className='rounded-full' src={member.src}  alt='Chairman'/>
        <h3 className='text-xl my-2'>{member.name}</h3>
              <h4 className='bg-violet-600 text-white py-1 px-3 rounded-full w-max'>{member.position}</h4>

              <div className='flex justify-between gap-4 mt-3'>
              {
                socials.map((social, index) => (
                  <FontAwesomeIcon className='cursor-pointer bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600' key={index} icon={social}/>
                ))
              }
              </div>
             </div>
          ))
        }
        </div>

       

    </div>
  )
}

export default AboutOurTeam
