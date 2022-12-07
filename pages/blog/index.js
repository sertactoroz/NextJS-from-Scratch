import Head from "next/head";
import Link from "next/link";
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Posts({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h3>Blog Page</h3>
      <Link href="/">Back to home</Link>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2> 
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
    
  );
}
