"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

export function useSearchBar(initialQuery = "") {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [query, setQuery] = React.useState(initialQuery);
    const [mounted, setMounted] = React.useState(false);
    const debounceTimer = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        setMounted(true);
        setQuery(searchParams.get("q") || "");
    }, [searchParams]);

    const pushQuery = (value: string) => {
        if (value.trim()) {
            router.push(`${pathname}?q=${encodeURIComponent(value)}`);
        } else {
            router.push(pathname);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            pushQuery(value);
        }, 500);
    };

    const handleClear = () => {
        setQuery("");
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        router.push(pathname);
    };

    React.useEffect(() => {
        return () => {
            if (debounceTimer.current) clearTimeout(debounceTimer.current);
        };
    }, []);

    return { query, mounted, handleInputChange, handleClear };
}