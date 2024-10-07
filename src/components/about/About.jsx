import React from 'react'
import './index.css'

const About = ({params}) => {
  return (
    <>
        <div className="tittleDiv">
          <div className="uppercase title">{params.slug}</div>
          <div className="subtitle">
            Bio | Awards | Companies | Services | Contact
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src="images/profile-pic.jpg" alt="" className="aboutImg" />
        </div>
        <div className="textDiv">
          <div className="textBio">[ Bio ]</div>
          <p className="about">
            Hello 👋 I am Sagar Chopra from Haryana, India. I am a Software Developer having 3 years of experience building web applications with React, Next, React Native etc. I love to build elegant, user-friendly interfaces for various devices.
          </p>
          <br />
          <p className="about">
          As a front-end developer with a passion for UI/UX development, I place great importance on how websites look and feel. I am driven by the desire to create visually stunning, responsive, and user-friendly interfaces. My keen attention to detail ensures that every aspect of the design enhances the user experience, while maintaining modern design trends and functionality.
          </p>
        </div>

        <div className="skillDiv">
          <div className="textBio">[ Skills ]</div>
          <div className="skillBlock">
            <div className="skillContainer">
              <img src="images/skills/html.svg" alt="" className="skillIcons" />
              <h2>HTML</h2>
            </div>
            <div className="skillContainer">
              <img src="images/skills/html.svg" alt="" className="skillIcons" />
              <h2>HTML</h2>
            </div>
            <div className="skillContainer">
              <img src="images/skills/html.svg" alt="" className="skillIcons" />
              <h2>HTML</h2>
            </div>
            <div className="skillContainer">
              <img src="images/skills/html.svg" alt="" className="skillIcons" />
              <h2>HTML</h2>
            </div>
            <div className="skillContainer">
              <img src="images/skills/html.svg" alt="" className="skillIcons" />
              <h2>HTML</h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default About