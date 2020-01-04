import React from "react"

import Header from "../components/Header/index.js"

import "./index.css"

export default () => (
  <div className="flex">
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
      <video
        autoplay="true"
        loop="true"
        muted="true"
        playsinline="true"
        className="object-cover bg-auto min-w-full h-full"
      >
        <source
          src={`../../videos/juanaVestBW.webm`}
          alt="Juana Vest BW webm"
          type='video/webm; codecs="vp8, vorbis"'
        />
        <source
          src={`../../videos/juanaVestBW.mp4`}
          alt="Juana Vest BW mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
    <Header />
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
      <video
        autoplay="true"
        loop="true"
        muted="true"
        playsinline="true"
        className="h-full"
      >
        <source
          src={`../../videos/juanaSkirtRGB.webm`}
          alt="Juana Skirt RGB webm"
          type='video/webm; codecs="vp8, vorbis"'
        />
        <source
          src={`../../videos/juanaSkirtRGB.mp4`}
          alt="Juana Skirt RGB mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
    <div className="absolute bottom-0 right-0 mb-1 mr-1 text-silvered font-body text-xs opacity-25">
      <p>&copy; 2020 Kyra Buenviaje. All rights reserved.</p>
    </div>
  </div>
)
