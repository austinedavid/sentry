"use client";
import React from "react";

const page = () => {
  const handleClick = () => {
    throw new Error("something now working well!!!");
  };
  return (
    <div>
      <button
        className=" px-3 py-2 rounded-md text-white bg-red-700"
        onClick={handleClick}
      >
        handle click
      </button>
    </div>
  );
};

export default page;
