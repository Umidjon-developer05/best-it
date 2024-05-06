import React from "react";

const Main1 = ({ Main }) => {
  return (
    <div className="Main  flex items-center sm:h-[750px] h-[700px] ">
      <div className="container flex justify-center  flex-wrap-reverse  items-center  ">
        <div className=" flex flex-col gap-5 ">
          <h1 className="sm:text-[50px]   sm:w-[600px]  font-semibold text-white ">
            {Main.title}
          </h1>
          <p className="text-sm">{Main.description}</p>
          <button className="button ">
            <p>{Main.button}</p>
          </button>
        </div>
        <div>
          <img src="/4.png" className=" w-[600px] " />
        </div>
      </div>
    </div>
  );
};

export default Main1;
