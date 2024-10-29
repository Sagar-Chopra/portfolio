import React, { useRef, useState } from "react";
import "./index.css";

const Credits = ({ params }) => {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const togglePlayPause1 = (e) => {
    e.stopPropagation();
    if (isPlaying1) {
      audioRef1.current.pause();
      setIsPlaying1(false);
    } else {
      if (isPlaying2) {
        audioRef2.current.pause(); 
        setIsPlaying2(false);
      }
      audioRef1.current.play();
      setIsPlaying1(true);
    }
  };

  const togglePlayPause2 = (e) => {
    e.stopPropagation();
    if (isPlaying2) {
      audioRef2.current.pause();
      setIsPlaying2(false);
    } else {
      if (isPlaying1) {
        audioRef1.current.pause(); 
        setIsPlaying1(false);
      }
      audioRef2.current.play();
      setIsPlaying2(true);
    }
  };
  return (
    <>
      <div className="tittleDiv">
        <div className="uppercase title">{params.slug}</div>
        <div className="subtitle">Assets | Technology</div>
      </div>
      <div className="creditContianer">
        <div className="creditInnerContainer">
          <p className="descrip mb-8">
            This portfolio wouldn&apos;t be possible without the incredible tools and
            technologies that powered its creation. Here&apos;s a special thanks to
            all the resources that made it happen!
          </p>
          <img src="next.svg" alt="next" className="next mb-8" />
          <p className="descrip">
            The React Framework for the Web. Used by some of the world&apos;s
            largest companies, Next.js enables you to create high-quality web
            applications with the power of React components.
          </p>
        </div>
        <div className="assetOrigin">[ Sketchfab ]</div>
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Oceanic Currents"
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allowFullScreen
            src="https://sketchfab.com/models/ef072f0ded9f4b1a8bb44a6ba536a1bb/embed"
            style={{ width: "100%", height: "480px" }}
            className="frame"
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              margin: "5px",
              color: "#4A4A4A",
            }}
          >
            <a
              href="https://sketchfab.com/3d-models/oceanic-currents-ef072f0ded9f4b1a8bb44a6ba536a1bb?utm_medium=embed&utm_campaign=share-popup&utm_content=ef072f0ded9f4b1a8bb44a6ba536a1bb"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Oceanic Currents
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/norgeotloic?utm_medium=embed&utm_campaign=share-popup&utm_content=ef072f0ded9f4b1a8bb44a6ba536a1bb"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Loïc Norgeot
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ef072f0ded9f4b1a8bb44a6ba536a1bb"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Billions stars Skybox HDRI panorama"
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allowFullScreen
            src="https://sketchfab.com/models/7e3e8f94810b44dd837bacad6c65b5e8/embed"
            style={{ width: "100%", height: "480px" }}
            className="frame"
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              margin: "5px",
              color: "#4A4A4A",
            }}
          >
            <a
              href="https://sketchfab.com/3d-models/billions-stars-skybox-hdri-panorama-7e3e8f94810b44dd837bacad6c65b5e8?utm_medium=embed&utm_campaign=share-popup&utm_content=7e3e8f94810b44dd837bacad6c65b5e8"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Billions stars Skybox HDRI panorama
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/alexandr.melas?utm_medium=embed&utm_campaign=share-popup&utm_content=7e3e8f94810b44dd837bacad6c65b5e8"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Aliaksandr.melas
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7e3e8f94810b44dd837bacad6c65b5e8"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
        {/* Custom Audio Player */}
        <div className="audioWrapper">
          <div className="assetOrigin">[ pixabay ]</div>

          <div className="custom-audio-player">
            <button className="audioConsole" onClick={(e) => togglePlayPause1(e)}>
              {isPlaying1 ? "Pause" : "Play"}
            </button>
            <audio ref={audioRef1} preload="true">
              <source src="sound/globeSound.mp3" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>

          <div className="custom-audio-player">
            <button className="audioConsole" onClick={(e) => togglePlayPause2(e)}>
              {isPlaying2 ? "Pause" : "Play"}
            </button>
            <audio ref={audioRef2} preload="true">
              <source src="sound/background.mp3" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
        <div className="assetOrigin">[ Three js ]</div>
        <div className="flex items-center justify-center">
          <p className="descrip">
            Designed inspired by{" "}
            <a href="https://richardmattka.com/">richardmattka</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Credits;
