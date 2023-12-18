import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByCount } from "./CounterSlice";

export default function Counter() {
  const counter = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  const [incrementByNumber, setIncrementByNumber] = useState(0);
  const addValues = Number(incrementByNumber) | 0;

  const clear = () => {
    dispatch(reset());
    setIncrementByNumber(0);
  };
  return (
    <main className="mx-auto bg-slate-600 text-white font-bold">
      <h1 className="text-center"> Counter </h1>
      <h2 className="text-center"> {counter} </h2>
      <div className="flex gap-10 justify-center items-center my-10 pb-20">
        <button
          className="px-5 py-2 bg-orange-500 w-12 rounded-md"
          onClick={() => dispatch(increment())}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="px-5 py-2 bg-orange-500 w-12 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          -{" "}
        </button>

        <div className="flex gap-10">
          <input
            type="text"
            name="incrementByNumber"
            value={incrementByNumber}
            className="text-black"
            onChange={(e) => setIncrementByNumber(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-orange-500 w-20 rounded-md"
            onClick={() => dispatch(incrementByCount(addValues))}
          >
            Add count
          </button>
        </div>
        <button
          className="px-5 py-2 bg-orange-500 w-20 rounded-md"
          onClick={() => clear()}
        >
          Clear
        </button>
      </div>
    </main>
  );
}
