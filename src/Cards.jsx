import React from "react";
import { cardData } from "./data";

const cards = () => {
  return (
    <div className="w-full py-14 bg-[#252525]">
      <div className="max-w-6xl mx-auto grid grid-cols-3">
        {cardData.map((item) => (
          <div key={item.id}>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 text-gray-100">
              <img
                src={item.image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {item.title}
                  </h2>
                  <p className="dark:text-gray-100">{item.description}</p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cards;
