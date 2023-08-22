import React from "react";
import jsonData from "../data/providers.json";
import ProviderList from "../components/ProviderList";

export default function SearchResults() {
  console.log(jsonData.providers);

  return (
    <main className=" w-screen flex flex-row gap-5 ">
      {/* Filter section */}
      <section className="w-1/4 bg-blue-900 text-white ">
        <h1> search section </h1>
      </section>
      {/* Main section - List the providers */}
      <section className="w-full">
        {jsonData.providers.map((provider) => (
          <div key={provider.id}>
            <ProviderList
              id={provider.id}
              name={provider.name}
              bio={provider.bio}
              profile={provider.profilePicture}
              experience={provider.experience}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
