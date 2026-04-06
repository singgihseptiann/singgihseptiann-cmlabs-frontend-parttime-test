"use client";
import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search..." }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");
  const [mounted, setMounted] = React.useState(false);
  const debounceTimer = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setMounted(true);
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer for debounced search
    debounceTimer.current = setTimeout(() => {
      if (value.trim()) {
        router.push(`${pathname}?q=${encodeURIComponent(value)}`);
      } else {
        // If user deletes search, go back to all items
        router.push(pathname);
      }
    }, 500);
  };

  const handleClear = () => {
    setQuery("");
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    router.push(pathname);
  };

  React.useEffect(() => {
    // Cleanup timer on unmount
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-md mb-6 relative">
      <input type="text" value={query} onChange={handleInputChange} placeholder={placeholder} className="w-full px-4 py-2 border border-zinc-400 rounded-lg text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 pr-10" />
      {query && (
        <button onClick={handleClear} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors" type="button" title="Clear search">
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
