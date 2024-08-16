import React from "react";

const Navbar = ({ title }) => {
  return (
    <>
      <nav className="flex bg-gray-700 items-center justify-between bg-primary p-3">
        <h1 className="text-white text-lg font-semibold"> Home - DashBoard</h1>
        <div className="flex items-center justify-center flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-input w-52 focus:outline-none p-1 rounded-lg"
          />
        </div>
      </nav>

      <section className="p-6 flex justify-between items-center">
        <div>
          <h1 className="font-bold md:text-2xl">{title}</h1>
        </div>

        <div className="flex   justify-evenly space-x-4">
          <button disabled className="bg-white p-1 border-2 rounded-md  ">
            Add Widget <span className="text-xl">+</span>
          </button>
          <button>
            <i className="bg-white p-4 border-2 rounded-md fa-solid fa-arrows-rotate fa-lg"></i>
          </button>
          <button>
            <i className="bg-white p-4 border-2 rounded-md fa-solid fa-ellipsis-vertical fa-lg"></i>
          </button>
          <button className="bg-white p-1 border-2 text-blue-600 border-blue-600 rounded-md">
            <i className=" text-black fa-solid fa-clock fa-lg"></i> | Last 2
            days
            <i className="text-black pl-1 fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
