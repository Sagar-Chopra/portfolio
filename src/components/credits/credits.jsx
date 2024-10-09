import React from "react";
import "./index.css";

const Credits = ({ params }) => {
  return (
    <>
      <div className="tittleDiv">
        <div className="uppercase title">{params.slug}</div>
        <div className="subtitle">
          Assets | Technology
        </div>
      </div>
      <div className="creditContianer">
        <img src="next.svg" alt="next" />
      </div>
    </>
  );
};

export default Credits;
