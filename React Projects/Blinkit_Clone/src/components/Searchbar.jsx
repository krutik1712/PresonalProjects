import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const placeholderText = [
        "Search for 'bread'",
        "Search for 'milk'",
        "Search for 'fruits'",
        "Search for 'chocolate'",
        "Search for 'rice'",
        "Search for 'wheat'",
        "Search for 'egg'"
    ];

    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderText.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [placeholderText.length]);

    return (
        <div className="search-container flex items-center p-3 w-full rounded-lg gap-3 bg-slate-100">
            <IoIosSearch className='text-lg' />
            <input type="text" placeholder={placeholderText[placeholderIndex]} className="search-input w-full outline-none border-none bg-transparent" />
        </div>
    );
};

export default SearchBar;