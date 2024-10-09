import React from "react";
import "./index.css";
import Tilt from "react-parallax-tilt";

const workArray = [
  {
    id: "1",
    img: "images/work/xwife.svg",
    background: "none",
    title: "xWife"
  },
  {
    id: "2",
    img: "images/work/artofficial.svg",
    background: "white",
    title: "Artofficial"
  },
  {
    id: "3",
    img: "images/work/jungle.svg",
    background: "black",
    title: "jungle"
  },
  {
    id: "4",
    img: "images/work/robodoge.svg",
    background: "black",
    title: "robodoge"
  },
  {
    id: "5",
    img: "images/work/whitelabel.svg",
    background: "black",
    title: "whitelabel"
  },
  {
    id: "6",
    img: "images/work/wedo.svg",
    background: "white",
    title: "wedolaundry"
  }
]

const Work = ({ params }) => {
  return (
    <>
      <div className="tittleDiv">
        <div className="uppercase title">{params.slug}</div>
        <div className="subtitle">
          Projects | Exploration
        </div>
      </div>
      <div className="workOuterContainer">
        {workArray.map((data, index) => (
          <Tilt
            key={index}
            className="workInnerContainer"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1}
            transitionSpeed={400}
          >
            <img src={data.img} alt="Project" className="workImg" style={{background: data.background}} />
            <div className="titles">
              <p className="projectName">ArtOffici</p>
              <p className="aboutWork">{data.title}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default Work;
