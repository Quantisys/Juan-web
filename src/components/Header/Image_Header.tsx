import React from "react";
import Image from "./../../Images/Winter is here, welcome it with joy and happy holidays.png";

const Image_Header = () => {
  return (
    <div className="flex items-center">
      <img
        src={Image}
        alt="Image"
        className="w-[54%] h-[400px] mt-[4%] rounded-[19px] mx-auto transition duration-300 ease-in-out transform hover:border-2 hover:border-[#eeb624] hover:scale-105"
      />
    </div>
  );
};

export default Image_Header;
