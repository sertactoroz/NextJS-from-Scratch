import Head from 'next/head';
import Link from 'next/link';

export default function About(){
    return (<div>
    <Head>
    <title>About </title>
    </Head>
        <h3>About page</h3>
     
        <Link href="/">Back to home</Link>
       
    </div>)
}