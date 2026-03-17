"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Search } from "lucide-react"; // Icon use korle premium lage

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    const newParams = new URLSearchParams(params.toString());

    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="w-1/2 my-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="relative group flex items-center bg-white rounded-2xl shadow-sm border border-slate-200 p-1.5 transition-all duration-300 focus-within:shadow-md "
      >
        {/* Left Search Icon */}
        <div className="pl-4 pr-2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
          <Search size={20} />
        </div>

        {/* Input Field */}
        <input
          name="search"
          type="text"
          placeholder="Craving something specific? Search here..."
          className="flex-1 bg-transparent px-2 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none font-medium text-lg"
        />

        {/* Animated Search Button */}
        <button
          type="submit"
          className="bg-black/80 hover:bg-black text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 shadow-indigo-100 hover:shadow-lg shadow-md"
        >
          Search
        </button>
      </form>

      {/* Short suggestion tags under search (Extra Style) */}
      {/* <div className="flex gap-2 mt-3 ml-2">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
          Trending:
        </span>
        <button className="text-xs font-semibold text-indigo-500 hover:underline">
          Pizza
        </button>
        <button className="text-xs font-semibold text-indigo-500 hover:underline">
          Burger
        </button>
        <button className="text-xs font-semibold text-indigo-500 hover:underline">
          Katsudon
        </button>
      </div> */}
    </div>
  );
};

export default InputSearch;
