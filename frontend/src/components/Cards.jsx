import React from "react";

export const Cards = ({ item }) => {
  return (
    <>
      <div className="my-4 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white  dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {item.name}
              <div className="badge dark:text-white bg-pink-600">NEW</div>
            </h2>
            <p className="">{item.Title}</p>
            <div className="card-actions flex justify-between items-center">
              <div className="px-4 py-1  rounded-md border-[2px]">
                ${item.price}
              </div>
              <div className="cursor-pointer px-2 py-1  rounded-full border-[2px]  hover:text-white hover:bg-pink-400 duration-200 bg-pink-600">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
