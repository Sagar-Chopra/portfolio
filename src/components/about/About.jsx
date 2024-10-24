import React from 'react'
import './index.css'
import Link from 'next/link'

const skillArray = [
  {
    id: "1",
    img: "images/skills/html.svg",
    title: "HTML"
  },
  {
    id: "2",
    img: "images/skills/css.svg",
    title: "CSS"
  },
  {
    id: "3",
    img: "images/skills/js.svg",
    title: "JS"
  },
  {
    id: "4",
    img: "images/skills/react.svg",
    title: "React"
  },
  {
    id: "5",
    img: "images/skills/redux.svg",
    title: "Redux"
  },
  {
    id: "6",
    img: "images/skills/typescript.svg",
    title: "Typescript"
  },
]

const About = ({params}) => {
  return (
    <>
        <div className="tittleDiv">
          <div className="uppercase title">{params.slug}</div>
          <div className="subtitle">
            Bio | Companies | Services | Contact
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src="images/profile-pic.jpg" alt="Profile" className="aboutImg" />
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
            {skillArray.map((data, index) => (
              <div className="skillContainer" key={index}>
                <img src={data.img} alt="" className="skillIcons" />
                <h2>{data.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className='socialDiv'>
          <div className="textBio">[ Social | contact | connect ]</div>
          <div className='flex gap-12 cursor-pointer'>
            <a href="mailto:sagarchopra271@gmail.com">
              <img src="images/social/email.png" alt="" className="socialIcon" />
            </a>
            <a href="https://www.linkedin.com/in/sagar-chopra-a689671b6" target={"_blank"} rel="noopener noreferrer">
              <img src="images/social/linked-in.png" alt="" className="socialIcon" />
            </a>
          </div>
        </div>
    </>
  )
}

export default About