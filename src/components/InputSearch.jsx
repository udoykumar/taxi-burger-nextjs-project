"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    // new search parameters
    const newParams = new URLSearchParams(params.toString());
    // set query parameter
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Enter food name"
          className="px-3 py-2 rounded-lg border-none focus:outline-none focus:border-orange-500 placeholder:text-orange-500 focus:text-orange-500 transition duration-300 w-2xl ring ring-orange-500"
        />
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
