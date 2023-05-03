import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  setTimer,
} from "./counterSlice";

export function Counter() {
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
    <div className="w-full">
      {/* <div className="p-12 w-full flex items-center justify-between">
        <button
          className="border p-3 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <span className="font-semibold">{count}</span>

        <button
          className="border p-3 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement -
        </button>
      </div> */}

      <div className="w-full flex flex-row items-center justify-between">
        <button
          className="border p-3 rounded"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start Timer
        </button>
        <button
          className="border p-3 rounded"
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
          Add Amount
        </button>
      </div>
    </div>
  );
}
