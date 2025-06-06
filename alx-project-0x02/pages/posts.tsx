import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await res.json();
      const formatted = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts ALX Project</title>
      </Head>

      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700">Add Posts Here</h1>
        <p className="mb-6">You can view or add posts here</p>

        <div className="text-left max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
