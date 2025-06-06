import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return(
    <div className="m-17 bg-blue-100 shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-semibold text-gray-800 mb-2 p-5">{title}</h2>
    <p className="tex-gray-600">{content}</p>
    </div>
  )
};

export default Card;