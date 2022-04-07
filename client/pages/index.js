import Head from "next/head";
import Form from "../components/form/Form.js";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>start2impact-Node-Mysql</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}