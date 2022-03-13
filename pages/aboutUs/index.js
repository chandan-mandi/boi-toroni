import React from 'react'
import AboutOurTeam from '../../components/aboutUs/aboutOurTeam/aboutOurTeam'
import AboutUsAndOurSkills from '../../components/aboutUs/aboutUsAndOurSkills/aboutUsAndOurSkills'
import AboutUsBanner from '../../components/aboutUs/aboutUsBanner/AboutUsBanner'

const AboutUs = () => {
  return (
    <div>
      <AboutUsBanner/>

      {/* about us & our skills */}
      <AboutUsAndOurSkills/>

      {/* members */}
      <AboutOurTeam/>
    </div>
  )
}

export default AboutUs