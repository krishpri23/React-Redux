import React from "react";
import { Link } from "react-router-dom";

export default function ProviderList({ name, bio, profile, experience }) {
  const screenWidth = window.innerWidth;
  return (
    <div className=" flex flex-col my-3 px-10 py-3  md:flex md:flex-row md:gap-10 md:px-20 md:py-5 md:mx-5 md:my-3 bg-white ">
      {/* image */}
      <div>
        <img src={profile} alt="priest" />
      </div>

      {/* provider content */}
      <div className="flex flex-col gap-4 ">
        <h2>{name}</h2>
        <p> {experience}+ years of experience </p>
        <p className={screenWidth < 760 ? "truncate" : null}>{bio}</p>
      </div>
      <div className="flex items-center justify-center w-3/4">
        <Link to="#"> View Profile </Link>
      </div>
    </div>
  );
}

// list out 3 profiles at a time
// <div className="max-w-xs rounded-lg px-4 py-2 mx-10 my-3 flex flex-col justify-center items-center  bg-indigo-200 ">
// <img src={profile} alt="priest" className="w-100 h-100" />
// <h1 className=" py-1"> {name} </h1>
// <p className=" py-4"> {bio.slice(0, 100)} ...</p>
// <Link className=" py-4 " to="#">
//   {" "}
//   View Profile{" "}
// </Link>
// </div>
