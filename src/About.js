import React from 'react';
import HeroSection from './component/HeroSection';
import Educations from './component/Educations'
import Skills from './component/Skills'

const About = () => {

  const data = {
    subhead: "WHO I AM",
    name: "Venkatesh Moyya",
    image: "./images/about.jpg",
    myInfo: `I am a B.Tech graduate in E.C.E with a passion for frontend development and backend programming. With experience in HTML, CSS, Bootstrap, JavaScript, React, Python, Node.js, and Express.js, I have developed several web applications including an ecommerce website, an app store, a calculator, and a to-do list application. My strong attention to detail, problem-solving skills, and ability to learn quickly make me a valuable asset to any team. I am seeking a challenging role in a dynamic organization that allows me to apply and further develop my skills in web development. Please feel free to reach out to me for any opportunities or collaborations.`,
  }

  return (
    <>
      <HeroSection {...data} />
      <div className="about-section">
        <div className="common-heading">
          <p className='common-subheading mb-2'>My Educations & Skills</p>
          <h1>More About Me</h1>
        </div>

        <div className="card-container grid grid-two-column ">
          <Educations />
          <Skills />
        </div>
      </div>
    </>
  )
}

export default About