import Link from 'next/link';
import Head from 'next/head';

export default function About() {
	return <>

		<Head>
			<title>About</title>
		</Head>
		<h3>About page</h3>
		<Link href="/">
			Geri dön
		</Link>

		<style jsx>{`
          h3 {
            font-size: 20px;
            font-weight: 500;
            color: orangered;
            
          }
          .p{
  align-items: center;
  display: flex;
  padding: 40px;
}

		`}</style>

	</>
}