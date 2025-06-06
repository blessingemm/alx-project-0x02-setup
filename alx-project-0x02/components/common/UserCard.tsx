import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white text-gray-900 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default UserCard;
