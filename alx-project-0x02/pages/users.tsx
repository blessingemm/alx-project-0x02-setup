import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <>
      <Head>
        <title>Users | ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 text-center bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">User Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
