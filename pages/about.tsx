import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    // <Layout>
    <>
      <Head>
        <title>about page</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>
          <h3>Kembali ke Home</h3>
        </a>
      </Link>
    </>
    // </Layout>
  );
}
