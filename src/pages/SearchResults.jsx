import React from "react";
import jsonData from "../data/providers.json";
import { Link } from "react-router-dom";

export default function SearchResults() {
  console.log(jsonData.providers);
  const screenWidth = window.innerWidth;

  return (
    <main className=" w-screen flex flex-row gap-5 bg-slate-100 drop-shadow-lg ">
      {/* Filter section */}
      <section className="w-1/4 bg-blue-900 text-white ">
        <h1> search section </h1>
      </section>
      {/* Main section - List the providers */}
      <section className="w-full">
        {jsonData.providers.map((provider) => (
          <div
            key={provider.id}
            className=" flex flex-col my-3 pl-10 py-3  md:flex md:flex-row md:gap-10 md:pl-20 md:py-5 md:mx-5 md:my-3 bg-white "
          >
            {/* image */}
            <div>
              <img
                className="rounded-lg drop-shadow-md"
                src={provider.profilePicture}
                alt="priest"
              />
            </div>

            {/* provider content */}
            <div className="flex flex-col gap-4 ">
              <h2>{provider.name}</h2>
              <p> {provider.experience}+ years of experience </p>
              <p className={screenWidth < 760 ? "truncate" : null}>
                {provider.bio}
              </p>
            </div>
            <div className="flex items-center justify-center w-3/4">
              <Link to={`/searchResults/${provider.id}`}> View Profile </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
