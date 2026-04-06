"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface BreadcrumbItem {
  id: string;
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const router = useRouter();

  return (
    <nav className="flex items-center gap-2 text-sm text-zinc-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={`${item.href}-${index}`}>
          {index > 0 && <span className="text-zinc-400">›</span>}

          {index === 0 ? (
            // 🔥 Back button
            <button onClick={() => router.back()} className="font-semibold text-zinc-600 hover:text-zinc-900 hover:cursor-pointer">
              {item.label}
            </button>
          ) : (
            <span className="text-zinc-500">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
