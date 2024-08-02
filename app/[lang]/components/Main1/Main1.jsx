import React from "react";

const Main1 = ({ Main }) => {
  return (
    <div className="  flex items-center sm:h-[750px] h-[700px] ">
      <div className="container flex justify-around  flex-wrap-reverse  items-center  ">
        <div className=" flex flex-col gap-5 ">
          <h1 className="sm:text-[50px]   sm:w-[600px]  font-semibold  ">
            {Main.title}
          </h1>
          <p className="text-sm">{Main.description}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main1;
