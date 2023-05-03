import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  decrement,
  increment,
  incrementByAmount,
  setTimer,
} from "../feature/counter/counterSlice";
const Layout = ({ children }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(false);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [totalTime, setTotalTime] = useState("0");
  const intervalId = useRef();
  useEffect(() => {
    // helper function to stop an existing timer
    const clear = () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };

    // start the timer
    if (isRunning) {
      intervalId.current = setInterval(() => {
        if (count > 0) {
          dispatch(decrement());
        } else {
          setIsRunning(false);
          clear();
        }
      }, 1000);
    }

    // stop the timer when isRunning becomes false
    else {
      clear();
    }

    // cleanup function stops the timer when the component unmounts
    return clear;
  }, [dispatch, isRunning, count]);

  return (
    <div className="min-h-screen relative w-full">
      <div className="absolute top-0 bg-blue-500 w-full p-4 flex flex-col items-center justify-center text-xl">
        <p className="text-5xl">Time Remaining: {count}</p>
        <div className="w-full flex flex-row items-center justify-between">
          <button
            className={`hover:bg-green-300 border p-3 rounded ${
              isRunning ? "bg-green-400" : "bg-gray-300"
            }`}
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            Start Timer
          </button>
          <button
            className="border p-3 rounded bg-red-300"
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
          >
            Stop Timer
          </button>
        </div>
        <div className="flex flex-row mt-4 gap-4">
          <input
            aria-label="Set increment amount"
            value={totalTime}
            className="border p-3 rounded"
            onChange={(e) => setTotalTime(e.target.value)}
          />
          <button
            className="border p-3 rounded"
            onClick={() => dispatch(setTimer(Number(totalTime) || 0))}
          >
            Set Time
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <Link className="text-white hover:text-yellow-300" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-yellow-300" href="/cooper">
            Coopers
          </Link>
          <Link className="text-white hover:text-yellow-300" href="/motorbike">
            Motorbike
          </Link>
          <Link className="text-white hover:text-yellow-300" href="/last">
            Last
          </Link>
        </div>
      </div>
      <div className="fkex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
