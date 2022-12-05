import Head from "next/head";
import Link from "next/link";

export default function Posts() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h3>Blog Page</h3>
      <Link href="/">Back to home</Link>
    </div>
  );
}
