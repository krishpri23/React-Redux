import React from "react";
import SearchForm from "./SearchForm";

export default function HeroSection() {
  return (
    <section className="w-screen bg-indigo-100 ">
      {/* Hero title */}
      <div className=" flex flex-col md:flex-row md:justify-between gap-16 items-center">
        <div className="text-5xl mx-5 my-10 font-semibold md:w-1/2">
          <h1> Find your service provider locally! </h1>
          {/* <p className="text-sm my-5 text-gray-400">
            {" "}
            Launching in Bay Area, Greater NYC & London
          </p> */}
        </div>

        <div className="flex flex-col items-center mx-3 my-5 border-2 border-slate-400 px-5 py-3 w-full rounded-lg  md:w-1/2">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
