import React from "react";
import "./index.css";
import Tilt from "react-parallax-tilt";

const workArray = [
  {
    id: "1",
    img: "images/work/xwife.svg",
    background: "none"
  },
  {
    id: "2",
    img: "images/work/artofficial.svg",
    background: "white"
  },
  {
    id: "3",
    img: "images/work/jungle.svg",
    background: "black"
  },
  {
    id: "4",
    img: "images/work/robodoge.svg",
    background: "black"
  },
  {
    id: "5",
    img: "images/work/whitelabel.svg",
    background: "black"
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
            <img src={data.img} alt="" className="workImg" style={{background: data.background}} />
            <div className="titles">
              <p className="name">ArtOffici</p>
              <p className="aboutWork">ArtOfficial</p>
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default Work;
