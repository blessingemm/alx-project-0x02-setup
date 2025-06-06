import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md border border-gray-200 text-left">
      <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
