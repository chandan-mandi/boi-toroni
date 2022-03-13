import React from 'react'
import AboutUsTitle from '../aboutUsTitle/aboutUsTitle'

const AboutUsAndOurSkills = () => {
    const skills = [
        {id: 1, skill: 'Customer Favorites', value: '95%'},
        {id: 1, skill: 'Customer Favorites', value: '90%'},
        {id: 1, skill: 'Customer Favorites', value: '87%'},
    ]
  return (
    <div className="my-10 container mx-auto">

           {/* title */}
       <AboutUsTitle >
                About Us & Our Skills
        </AboutUsTitle>

       
        <div className="lg:grid flex flex-col-reverse  lg:grid-cols-2 gap-10">
             {/* skills */}
           <div className="my-auto">
           {
                skills.map(skill => (
                    <>
                    <div className="mb-1 text-base font-medium">{skill.skill}</div>
<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div className="bg-gray-600 h-2.5 rounded-full" style={{width: skill.value}}></div>
</div></>
                ))
            }
           </div>

           {/* about text */}
        <div>
        <p className="mb-3">
        Everyone who likes to read also wants to let people read. The kids to young generation pass time at FaceBook rather reading live books. Many readers do not have time to visit book shops frequently. BoiPori.com wants to make readers life more easy.
        </p>
        <p className="mb-3">
        It is a combined effort who love to read and like to let people read. Boipori.com never be successful if you do not come forward to help people read.
        </p>
        <p >
        You can help/ contribute Boipori movement in many ways. Donate book for free reading, uploading your reference books for renting, new books for selling, selling used books or giving suggestions can be good form of supporting Boipori movement.
        </p>
        <p>We want to make the future generation more fascinated to read live BOOKS.
        </p>
        </div>
        </div>

        
       </div>
  )
}

export default AboutUsAndOurSkills