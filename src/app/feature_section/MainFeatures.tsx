import React from "react";
import VideoSection from "./VideoSection";
import Scanner from "./Scanner";
// import Image from 'next/image'
// import VideoSection from './VideoSection';
// import AI from '../Image/How will Artificial Intelligence and Internet of Things change the world_.mp4'

export default function MainFeatures() {
  return (
    <div className=" md:px-0 px-10 flex flex-col mt-10 mx-auto space-y-6 md:space-y-0">
      <div className="py-10">
        <h1 className="text-white w-ful md: text-center font-bold text-3xl md:text-[35px] capitalize py-10">
          motivation and evolution of a commputer age{" "}
        </h1>
      </div>
      <div className=" md:px-14 px-0 flex flex-col mt-4 mx-auto space-y-10  md:space-y-0 md:flex-row">
        <VideoSection />
        <Scanner />
      </div>
    </div>
  );
}
