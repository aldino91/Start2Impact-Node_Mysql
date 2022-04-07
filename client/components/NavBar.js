import React from "react";
import nameLinks from "../utils/nameLinks";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-col items-center justify-around w-full px-2 py-3 font-mono rounded-md shadow-md shadow-slate-400">
      <div className="flex items-center justify-center w-full">
        <Image
          src="/start2impact.jpg"
          alt="Star2Impact"
          width={60}
          height={60}
        />
        <div>
          <h1>Reporter Pollution</h1>
        </div>
      </div>
      <div className="flex flex-col justify-around w-full lg:flex-row ">
        {nameLinks.map((report) => (
          <Link
            href={`${
              report === "new"
                ? "/"
                : report === "search-all"
                ? "/search-all"
                : report === "search-your-report"
                ? "/search-your-report"
                : null
            } `}
            key={report}
          >
            <a className="w-full p-2 mt-1 text-center text-white rounded-md lg:w-1/4 flexjustify-center bg-stone-300 hover:bg-stone-600 hover:shadow-lg lg:mt-0">
              <div>{report}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
