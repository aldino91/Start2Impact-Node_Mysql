import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GetReport({ data }) {
  return (
    <>
      {data[0] == undefined ? (
        <div className="p-1 mt-6 text-center text-red-700 underline rounded-md shadow-md text-bold shadow-slate-400">
          Non abbiamo trovato niente nel nostro database!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3 lg:grid-cols-4">
          {data.map((report) => (
            <div
              key={report.id}
              className="p-1 rounded-md shadow-md shadow-slate-400"
            >
              <Link href={`/report/${report.id}`}>
                <a>
                  <div className="flex flex-col text-center">
                    <h1 className="mt-1 mb-1 font-bold capitalize">
                      {report.city}
                    </h1>
                    <Image
                      src={report.image}
                      alt="Picture of the author"
                      width={200}
                      height={200}
                      objectFit="cover"
                      className="rounded-md"
                    />
                    <div className="p-2 text-left">
                      <p className="capitalize border-b-2 border-slate-300">
                        name:
                        {report.name}
                      </p>
                      <p className="overflow-hidden border-b-2 border-slate-300">
                        Description:{report.comment}
                      </p>
                      <p className="border-b-2 border-slate-300">
                        Temp:{report.temp}º
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
