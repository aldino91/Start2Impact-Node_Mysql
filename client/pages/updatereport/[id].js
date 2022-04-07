import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Form from "../../components/form/Form";
import { fetchGetReport } from "../../utils/fetchapi/AllFetchApi";

export default function UpdateReport() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGetReport(id, setData);
  }, [id]);

  return (
    <Layout>
      <Form data={data} />
    </Layout>
  );
}
