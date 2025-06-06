// pages/index.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02</title>
        <meta name="description" content="Next.js, TypeScript, Tailwind CSS Project" />
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <Header />
        <div className="mt-50 text-center">
          <h2 className="text-2xl font-semibold">WELCOME ONBOARD</h2>
          <p className="mt-4 text-gray-700">This is the beginning of something awesome</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-none border-blue-700 rounded text-sm border cursor-pointer m-2">Get Started</button>
        </div>
      </main>
    </>
  );
}
