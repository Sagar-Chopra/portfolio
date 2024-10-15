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
        <div className="creditInnerContainer">
          <img src="next.svg" alt="next" className="next" />
          <p className="descrip">The React Framework for the Web. Used by some of the world&apos;s largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>
        </div>

        <div className="sketchfab-embed-wrapper">
      <iframe
        title="Oceanic Currents"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allowFullScreen
        src="https://sketchfab.com/models/ef072f0ded9f4b1a8bb44a6ba536a1bb/embed"
        style={{ width: '100%', height: '480px' }} // You can adjust width and height as needed
      />
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/oceanic-currents-ef072f0ded9f4b1a8bb44a6ba536a1bb?utm_medium=embed&utm_campaign=share-popup&utm_content=ef072f0ded9f4b1a8bb44a6ba536a1bb"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Oceanic Currents
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/norgeotloic?utm_medium=embed&utm_campaign=share-popup&utm_content=ef072f0ded9f4b1a8bb44a6ba536a1bb"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Loïc Norgeot
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ef072f0ded9f4b1a8bb44a6ba536a1bb"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
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
        style={{ width: '100%', height: '480px' }} // Adjust width and height as needed
      />
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/billions-stars-skybox-hdri-panorama-7e3e8f94810b44dd837bacad6c65b5e8?utm_medium=embed&utm_campaign=share-popup&utm_content=7e3e8f94810b44dd837bacad6c65b5e8"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Billions stars Skybox HDRI panorama
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/alexandr.melas?utm_medium=embed&utm_campaign=share-popup&utm_content=7e3e8f94810b44dd837bacad6c65b5e8"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Aliaksandr.melas
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7e3e8f94810b44dd837bacad6c65b5e8"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
      </div>
    </>
  );
};

export default Credits;
