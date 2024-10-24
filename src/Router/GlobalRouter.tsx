import React from "react";
import Navbar from "../common/Header";
import Main_Header from "../components/Header/Main_Header";
import Image_Header from "../components/Header/Image_Header";
import Content_Header from "../components/Header/Content_Header";
import Explore_Products from "../components/Product/Explore_Products";
import Upcoming_Product from "../components/Product/Upcoming_Product";

const GlobalRouter = () => {
  return (
    <>
      <Navbar />
      <Main_Header />
      <Image_Header />
      <Content_Header />
      <Explore_Products />
      <Upcoming_Product />
    </>
  );
};

export default GlobalRouter;
