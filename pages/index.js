import Head from "next/head";
import { Header } from "../components/Header";
import Link from "next/link";
import Hotjar from "../components/Hotjar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceX</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <Hotjar />
      </Head>

      <main className=''>
        <div
          className={` h-screen bg-[url('/images/launch-1.jpg')]
 bg-origin-padding bg-top bg-no-repeat bg-cover text-white flex flex-col justify-center items-start p-8 gap-4`}
        >
          <h1 className='text-8xl tracking-widest font-bebas text-indigo-500 md:text-white'>
            our history
          </h1>
          <Link href='/history'>
            <button className='text-xl font-bold uppercase text-indigo-500 md:text-white p-4 w-52 border-2 border-indigo-500 md:border-white transition-colors duration-500 ease-in-out hover:bg-indigo-600 md:hover:bg-white hover:text-black'>
              Learn More
            </button>
          </Link>
        </div>
        <div
          className={` h-screen bg-[url('/images/rocket-1-medium.jpg')]
 bg-origin-padding bg-top bg-no-repeat bg-cover text-white flex flex-col justify-center items-start p-8 gap-4`}
        >
          <h1 className='text-8xl tracking-widest font-bebas text-rose-500 md:text-white'>
            our payload
          </h1>
          <Link href='/payload'>
            <button className='text-xl font-bold uppercase text-rose-500 md:text-white p-4 w-52 border-2 border-rose-500 md:border-white transition-colors duration-500 ease-in-out hover:bg-rose-600 md:hover:bg-white hover:text-black'>
              Learn More
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
