import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <button onClick={() => fetchHello()} type='button'>Click Me!</button>
}


async function fetchHello() {
  const r = await fetch('/api/hello');
  console.log(await r.json());
}