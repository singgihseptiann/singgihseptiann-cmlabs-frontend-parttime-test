import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, href }) => (
  <Link href={href}>
    <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow min-w-50 text-center border border-zinc-100 block">
      <span className="text-lg font-semibold text-zinc-800">{title}</span>
    </div>
  </Link>
);

export default Card;
