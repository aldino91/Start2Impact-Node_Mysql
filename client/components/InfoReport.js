import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteReport } from "../utils/fetchapi/AllFetchApi";
import ClipLoader from "react-spinners/ClipLoader";

export default function InfoReport({ id, data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {data.map((report) => (
        <div key={report.id} className="flex flex-col w-full text-center">
          <div className="w-3/4 mx-auto my-4 text-2xl font-bold capitalize border-0 rounded-md shadow-md lg:w-2/6 shadow-slate-400">
            {report.city}
          </div>
          <div className="relative w-full p-2 mx-auto mb-4 rounded-md shadow-md lg:w-1/2 h-96 shadow-slate-400">
            <Image
              src={report.image}
              alt="Picture of the author"
              layout="fill"
              objectFit="none"
              quality={100}
            />
          </div>
          <div className="p-2 m-2 text-center rounded-md shadow-md bg-slate-100 shadow-slate-400">
            <p className="underline">Name:</p>
            <p className="capitalize">{report.name}</p>
            <p className="underline">Description:</p>
            <div className="border-2 rounded-md border-slate-300">
              {report.comment}
            </div>
            <p className="underline">Temp:</p>
            <p>{report.temp}º</p>
          </div>
          <div className="flex flex-row justify-around w-1/2 p-2 mx-auto ">
            <button
              onClick={() => deleteReport(id, router, setLoading)}
              className="p-2 text-white bg-red-400 rounded-md shadow-md shadow-slate-400 hover:bg-red-600"
            >
              {!loading ? (
                "Delete"
              ) : (
                <ClipLoader color="#ffffff" loading={loading} size={20} />
              )}
            </button>
            <button className="p-2 text-white bg-orange-400 rounded-md shadow-md shadow-slate-400 hover:bg-orange-600">
              <Link href={`/updatereport/${id}`}>
                <a>Update</a>
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
