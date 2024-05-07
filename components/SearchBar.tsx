import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center gap-2 px-2 bg-[#E3E6E8] py-3 rounded-lg">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
