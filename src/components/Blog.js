import React from "react";
import { blogData } from "../mockData/data";

const Blog = () => {
  return (
    <section className="w-full py-8">
      <p className="text-center text-gray text-xl my-8">Our Blog</p>
      <h1 className="text-center text-3xl lg:text-4xl leading-[50px] lg:leading-[70px] w-[80%] lg:w-[50%] mx-auto">
        Value proposition accelerator product management venture
      </h1>
      <div className="mb-8 mt-10 md:flex justify-between w-[80%] mx-auto">
      {blogData.map((data) => (
          <div className="w-full mb-16 md:mb-0 md:w-[24%]" key={data?.id}>
          <img src={data?.image} alt="" className="rounded-[15px] w-full h-[209px]" />
          <p className="text-base leading-7 my-4">
            Category <span className="text-gray">{data?.category}</span>
          </p>
          <p className="text-xl mb-2">
           {data?.desc}
          </p>
          <div className="flex mt-10 items-center">
            <img src={data?.authorImage} alt="author" className="h-8 w-8 rounded-full mr-6" />
            <p className="text-base">{data?.author}</p>
          </div>
        </div>
      ))}
      </div>
      <div className="w-[80%] mx-auto mt-20 text-center">
        <button className="text-center py-4 px-10 text-main border-[2px] border-main font-bold ">
          Load more
        </button>
      </div>
    </section>
  );
};

export default Blog;
