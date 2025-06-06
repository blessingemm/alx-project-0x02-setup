import Head from "next/head";
import Header from "@/components/layout/Header";

const PostsPage = () => {
  return (
    <>
    <Head>
      <title>Posts ALX Project</title>
    </Head>

    <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Add Posts Here
        </h1>
        <p>You can view or add posts here</p>
      </main>
    </>
  );
};

export default PostsPage;