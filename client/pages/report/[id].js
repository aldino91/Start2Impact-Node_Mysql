import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { fetchIdGet } from "../../utils/fetchapi/AllFetchApi";
import InfoReport from "../../components/InfoReport";

export default function Report() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetchIdGet(id, setData);
  }, [id]);

  return (
    <Layout>
      <InfoReport id={id} data={data} />
    </Layout>
  );
}
