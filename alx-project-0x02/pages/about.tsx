import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button"; // import the Button

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About ALX Project</title>
      </Head>
      <Header />
      <main className="mt-1 border-none p-8 text-center bg-black h-30 bg-gradient-to-r from-blue-300 via-white-500 to-black-500">
        <h1 className="text-4xl font-bold text-white">About This Project</h1>
        <p className="text-white">This page contains information about Next.js setup</p>

        <div className="p-3 mt-6 flex justify-center gap-4 flex-wrap">
          <Button size="small" shape="rounded-sm">
            Small + Rounded-sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium + Rounded-md
          </Button>
          <Button size="large" shape="rounded-full">
            Large + Rounded-full
          </Button>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
