import Image from "next/image";
import { Inter } from "next/font/google";
import { Counter } from "../feature/counter/Counter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="text-yellow-600 min-h-screen flex flex-col items-center justify-center text-5xl">
        <p>Home Page</p>
        <p>I am a new page and the timer is still running!? </p>
      </div>
    </main>
  );
}
