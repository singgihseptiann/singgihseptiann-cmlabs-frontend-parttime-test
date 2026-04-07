import React from "react";
import Link from "next/link";
import { CardProps } from "@/types";


const Card: React.FC<CardProps> = ({ title, href }) => (
  <Link href={href}>
    <div className="bg-white rounded-lg p-4 cursor-pointer transition-shadow min-w-50 text-center border border-zinc-100 block">
      <span className="text-lg font-semibold text-zinc-800">{title}</span>
    </div>
  </Link>
);

export default Card;
