import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dip | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/navLogo.png" />
      </Head>
      <Navbar />
      <Main/>
      <Skills/>
    </div>
  )
}