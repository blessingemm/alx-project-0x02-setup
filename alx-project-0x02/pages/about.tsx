import Head from "next/head";
import Header from "@/components/layout/Header";

const AboutPage = () => {
  return(
    <>
      <head>
        <title>About ALX Project</title>
      </head>
      <Header />
      <main className=" mt-1 border-none p-8 text-center bg-black h-30 bg-gradient-to-r from-blue-300 via-white-500 to-black-500">
        <h1 className="text-4xl font-bold text-white">About This Project</h1>
        <p className="text-white">This page contains information about Next.js setup</p>
      </main>
    </>
  )
}

export default AboutPage;