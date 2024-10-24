import React from "react";
import LeftImage from "./../../Images/Upcoming_Product/Left_Image.png";
import RightImage1 from "./../../Images/Upcoming_Product/Right_Image_1.png";
import RightImage2 from "./../../Images/Upcoming_Product/Right_Image_2.png";

const Upcoming_Product = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Left Big Image with content */}
      <div className="w-[60%]">
        <div className="relative">
          <img
            src={LeftImage}
            alt="Left Big Image"
            className="w-full h-[500px] rounded-lg transition duration-300 ease-in-out transform hover:border-2 hover:border-pink-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 w-full">
            <h2 className="text-xl font-semibold">Big Image Title</h2>
            <p className="text-sm">
              This is a description of the big image. It provides context and details.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Right Small Images with content */}
      <div className="flex flex-col space-y-4 w-[35%]">
        <div className="relative">
          <img
            src={RightImage1}
            alt="Right Image 1"
            className="w-full h-[240px] rounded-lg transition duration-300 ease-in-out transform hover:border-2 hover:border-pink-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 w-full">
            <h2 className="text-lg font-semibold">Small Image 1 Title</h2>
            <p className="text-sm">
              Short description for small image 1.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
              Read More
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={RightImage2}
            alt="Right Image 2"
            className="w-full h-[240px] rounded-lg transition duration-300 ease-in-out transform hover:border-2 hover:border-pink-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 w-full">
            <h2 className="text-lg font-semibold">Small Image 2 Title</h2>
            <p className="text-sm">
              Short description for small image 2.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming_Product;
