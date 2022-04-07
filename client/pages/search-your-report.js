import axios from "axios";
import React, { useEffect, useState } from "react";
import GetReport from "../components/GetReport";
import Layout from "../components/Layout";
import { fetchCityGet } from "../utils/fetchapi/AllFetchApi";

export default function SearchYourReport() {
  const [city, setCity] = useState();
  const [data, setData] = useState([]);
  const [searchCity, setSearchCity] = useState();

  useEffect(() => {
    fetchCityGet(setData);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataFilter = data.filter((res) => res.city == city);
    setSearchCity(dataFilter);
    e.target.reset();
  };

  return (
    <Layout>
      <div className="w-full mt-9">
        <form
          className="w-full mx-auto md:w-2/3 lg:w-1/3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-between px-1">
            <input
              type="text"
              name="city"
              placeholder="Search Your City"
              className="p-2 border-2 rounded-md shadow-md border-slate-300 shadow-slate-400"
              required
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <button
              type="submit"
              className="p-2 text-white bg-green-500 border-2 border-green-500 rounded-md shadow-md shadow-slate-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div>
        {!searchCity ? (
          <div className="mt-6 text-center text-red-700 underline text-bold">
            Cerca una cittá!
          </div>
        ) : (
          <GetReport data={searchCity} />
        )}
      </div>
    </Layout>
  );
}
