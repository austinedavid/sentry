"use client";
import React from "react";
import * as sentry from "@sentry/nextjs";

const page = () => {
  const handleClick = () => {
    sentry.captureMessage("this is me capturing before consoling the messages");
    throw new Error("something now working well!!!");
  };
  return (
    <div>
      s
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
