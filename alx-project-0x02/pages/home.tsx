import { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "What is Next.js?",
      content: "Next.js is a React framework that enables server-side rendering and static site generation for building fast web apps.",
    },
    {
      title: "Why Tailwind CSS?",
      content: "Tailwind CSS is a utility-first CSS framework that allows rapid UI development with responsive design and theming.",
    },
    {
      title: "Using TypeScript",
      content: "TypeScript helps catch errors early through type checking and provides better developer experience in React projects.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts]);
  };

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <main className="m-1 border-none p-8 text-center bg-black min-h-screen bg-gradient-to-r from-blue-300 via-white-500 to-black-500">
        <h1 className="text-4xl font-bold text-white mb-6">
          The tech program that <span className="text-blue-600">helps you grow</span>
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            + Add New Post
          </button>
        </div>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {isModalOpen && (
          <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
        )}
      </main>
    </>
  );
};

export default HomePage;
