import { Inter } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { deductTimerByTenMinutes } from "../redux/features/counter/counterSlice";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="text-yellow-600 min-h-screen flex flex-col items-center justify-center text-5xl">
        <p>Home Page</p>
        <p>I am a new page and the timer is still running!? </p>
        <button
          className="border rounded-lg bg-gray-300 p-2"
          onClick={() => dispatch(deductTimerByTenMinutes())}
        >
          Forfeit 10
        </button>
      </div>
    </main>
  );
}
