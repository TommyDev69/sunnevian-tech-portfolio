"use client";

import { useState } from "react";

import Strenght from "./Strength";

const Department = () => {
  const [service, setService] = useState([
    {
      id: 1,
      Image: require("../Image/Icon (1).png"),
      heading: "Development",
      content: "Create a platform with the best and coolest quality from us.",
    },
    {
      id: 2,
      Image: require("../Image/Icon(6).png"),
      heading: "UI/UX Designer",
      content:
        "We provide UI/UX Design services, and of course with the best quality.",
    },
    {
      id: 3,
      Image: require("../Image/Icon (2).png"),
      heading: "Graphik Designer",
      content: "We provide Graphic Design services, with the best designers.",
    },
    {
      id: 4,
      Image: require("../Image/Icon (3).png"),
      heading: "Motion Graphik",
      content: "Create a platform with the best and coolest quality from us.",
    },
    {
      id: 5,
      Image: require("../Image/Icon (4).png"),
      heading: "Photography",
      content:
        "We provide Photography services, and of course with the best quality.",
    },
    {
      id: 6,
      Image: require("../Image/Icon (5).png"),
      heading: "Videography",
      content: "Create a platform with the best and coolest quality from us.",
    },
  ])
    return (
        <div className="px-6 ">
            <div className="py-[20px] bg-greern-600 my-24">
                <h2 className="text-white text-center text-4xl font-bold capitalize">
                The Service We Provide For You
                </h2>
            </div>
       
           <Strenght  Tool={service}/>
        </div>
    );
};

export default Department;
