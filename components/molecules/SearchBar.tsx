"use client";
import React from "react";
import { useSearchBar } from "@/hooks/useSearchBar";
import { SearchBarProps } from "@/types";

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search..." }) => {
  const { query, mounted, handleInputChange, handleClear } = useSearchBar();

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        {/* search icon */}
        <svg className="h-5 w-5 text-zinc-400 group-focus-within:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-md border border-zinc-200/80 rounded-full text-zinc-800 placeholder-zinc-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:bg-white hover:border-zinc-300"
      />

      {query && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 bg-zinc-100 rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-200 transition-all duration-200 focus:outline-none"
          type="button"
          title="Clear search"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;