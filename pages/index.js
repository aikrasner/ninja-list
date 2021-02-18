import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home </title>
      <meta name="keywords" content="ninjas"/>
    </Head>

    <div>
     
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut totam natus perferendis fuga culpa quasi doloremque illum provident, ad eius blanditiis eveniet sapiente quo facilis debitis? Est nemo perferendis voluptates!</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam eum asperiores sunt ratione, odio dolores reiciendis. Incidunt, architecto quibusdam repudiandae sequi, eos earum magni optio culpa perferendis corporis perspiciatis?</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
    </>
  )
}
