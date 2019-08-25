import React from 'react'
import { NextPage } from 'next';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>I think I succeeded. I can sleep now.</title>
    </Head>
    <Nav />
  </div>
)

export default Home
