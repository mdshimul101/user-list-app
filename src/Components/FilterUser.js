import React from "react";
import { FaSearch } from "react-icons/fa";
const FilterUser = ({ searchData, setSearchData, setSortData }) => {
  // get searchTerm
  const handleSearch = (event) => {
    setSearchData(event.target.value);
  };
  // get sort by value
  const handleSortUserChange = (event) => {
    setSortData(event.target.value);
  };
  return (
    <div className="space-y-2 md:flex md:flex-wrap gap-6 justify-end">
      <div className="join md:flex-1 md:block">
        <input
          onChange={handleSearch}
          value={searchData}
          className="input input-bordered join-item mx-auto w-[79vw] md:w-auto focus:outline-none"
          placeholder="Search..."
        />
        <button className="btn join-item  bg-sky-300 text-white hover:text-black">
          {" "}
          <FaSearch />
        </button>
      </div>

      <div className="form-control md:w-[250px]">
        <select
          onChange={handleSortUserChange}
          className="select select-bordered focus:outline-none"
        >
          <option value="" selected>
            Sort By Default ...
          </option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterUser;
