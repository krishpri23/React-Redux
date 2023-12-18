import React from "react";

export default function Counter() {
  return (
    <main className="mx-auto bg-slate-600 text-white font-bold">
      <h1 className="text-center"> Counter </h1>
      <div className="flex gap-10 justify-center items-center my-10">
        <button className="px-5 py-2 bg-orange-500 w-12 rounded-lg"> + </button>
        <button className="px-5 py-2 bg-orange-500 w-12 rounded-lg"> - </button>
      </div>
    </main>
  );
}
