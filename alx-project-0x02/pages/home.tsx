import Head from "next/head";
import Header from "@/components/layout/Header";

const HomePage = () => {
  return(
  <>
    <head>
      <title>Homepage</title>
    </head>
    <Header />
    <main className=" mt-1 border-none p-8 text-center bg-black h-30 bg-gradient-to-r from-blue-300 via-white-500 to-black-500">
      <h1 className="text-4xl font-bold text-white">The tech program that <span className="text-blue-600">helps you grow</span></h1>
    </main>
  </>
  );
}

export default HomePage; 