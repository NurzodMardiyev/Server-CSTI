import React from "react";
import video from "../../video/video.mp4";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative w-full h-[100px] border  bg-green-100">
      <div className="  flex justify-center bg-[#000000b4] items-center px-4 z-10 relative text-white h-full  ">
        <div className="flex gap-2 ">
          <div className="w-[50px] h-[50px]  flex justify-center items-center">
            <Link className="w-[40px] h-[40px] bg-green-100 flex justify-center items-center rounded-full text-gray-800 hover:bg-green-300 hover:w-[50px] hover:h-[50px] transition-all duration-150">
              <i className="fa fa-twitter text-xl"></i>
            </Link>
          </div>
          <div className="w-[50px] h-[50px]  flex justify-center items-center">
            <Link className="w-[40px] h-[40px] bg-green-100 flex justify-center items-center rounded-full text-gray-800 hover:bg-green-300 hover:w-[50px] hover:h-[50px] transition-all duration-150">
              <i className="fa fa-facebook text-xl"></i>
            </Link>
          </div>
          <div className="w-[50px] h-[50px]  flex justify-center items-center">
            <Link className="w-[40px] h-[40px] bg-green-100 flex justify-center items-center rounded-full text-gray-800 hover:bg-green-300 hover:w-[50px] hover:h-[50px] transition-all duration-150">
              <i className="fa fa-linkedin text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
      <video
        src={video}
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-[100px] object-cover z-0"
      >
        bu yer kerak emas
      </video>
    </div>
  );
}
