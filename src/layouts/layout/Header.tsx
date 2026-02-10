import React, { useState, useEffect } from "react";
import clsx from "clsx";

const BIRTHDAY = new Date("1996-12-30T00:00:00");

const useAge = () => {
  const [age, setAge] = useState(() => {
    const now = Date.now();
    const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
    return (now - BIRTHDAY.getTime()) / msPerYear;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
      setAge((now - BIRTHDAY.getTime()) / msPerYear);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return age;
};

const Header: React.FC = () => {
  const age = useAge();

  return (
    <header className={clsx("flex flex-col")}>
      <div className="xl:flex flex-row items-center justify-between rounded-full">
        <div className="rounded-full overflow-hidden w-fit hover:animate-spin">
          <img
            className="w-[120px] h-[120px] xl:w-[200px] xl:h-[200px]"
            src="https://avatars.githubusercontent.com/u/3956400?v=4"
          />
        </div>
      </div>

      <div className="mt-10 tracking-wide mx-4 xl:mx-0">
        <a
          href="/"
          className="text-primary text-5xl font-black text-gray-700"
        >
          JiPa<span className="text-red-400">i</span>
        </a>
        <p className="mb-2 text-gray-400 font-bold text-lg font-mono">
          {age.toFixed(8)} yo
        </p>
        <div className="xl:text-xl text-sm">
          <p className="text-gray-500">💻 Web Developer</p>
          <p className="text-gray-500">📍 Shanghai</p>
          <p className="text-gray-500">&quot;Everything is code here.&quot;</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
