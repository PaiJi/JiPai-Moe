import React from "react";
import clsx from "clsx";

const Header: React.FC = () => {
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
        <p className="mb-2 text-gray-400 font-bold text-lg">28 yo</p>
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
