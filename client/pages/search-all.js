import React, { useEffect, useState } from "react";
import axios from "axios";
import GetReport from "../components/GetReport";
import Layout from "../components/Layout";
import { fetchCityGet } from "../utils/fetchapi/AllFetchApi";

export default function search() {
  const [data, setData] = useState();
  useEffect(() => {
    fetchCityGet(setData);
  }, []);

  return <Layout>{data ? <GetReport data={data} /> : null}</Layout>;
}
