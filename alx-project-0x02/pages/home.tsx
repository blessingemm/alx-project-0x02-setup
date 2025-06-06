import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage = () => {
  return(
  <>
    <head>
      <title>Homepage</title>
    </head>
    <Header />
    <main className=" m-1 border-none p-8 text-center bg-black h-30 bg-gradient-to-r from-blue-300 via-white-500 to-black-500">
      <h1 className="text-4xl font-bold text-white">The tech program that <span className="text-blue-600">helps you grow</span></h1>
        <Card
          title="What is Next.js?"
          content="Next.js is a React framework that enables server-side rendering and static site generation for building fast web apps."
        />
       <Card
          title="Why Tailwind CSS?"
          content="Tailwind CSS is a utility-first CSS framework that allows rapid UI development with responsive design and theming."
        />
        <Card
          title="Using TypeScript"
          content="TypeScript helps catch errors early through type checking and provides better developer experience in React projects."
        />
    </main>
  </>
  );
}

export default HomePage; 