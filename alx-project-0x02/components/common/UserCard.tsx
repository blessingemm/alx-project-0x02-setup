import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-md shadow p-4 border">
      <h2 className="text-xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
