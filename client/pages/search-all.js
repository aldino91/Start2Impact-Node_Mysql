import React, { useEffect, useState } from "react";
import axios from "axios";
import GetReport from "../components/GetReport";
import Layout from "../components/Layout";
import { fetchGetReport } from "../utils/fetchapi/AllFetchApi";

export default function search() {
  const [data, setData] = useState();
  useEffect(() => {
    fetchGetReport(setData);
  }, []);
  return (
    <Layout>{data == undefined ? null : <GetReport data={data} />}</Layout>
  );
}
