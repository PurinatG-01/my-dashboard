import Head from "next/head"
import styles from "../styles/Home.module.css"
import DefaultLayout from "../layout/DefaultLayout"

export default function Home() {
  return (
    <>
      <Head>
        <title>My Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout></DefaultLayout>
    </>
  )
}
