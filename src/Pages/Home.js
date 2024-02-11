import React, { useState } from "react";
import FilterUser from "../Components/FilterUser";
import UserCard from "../Components/UserCard";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [sortData, setSortData] = useState("");

  console.log("Home data", searchData, sortData);
  return (
    <div className="space-y-4 my-20">
      <FilterUser
        searchData={searchData}
        setSearchData={setSearchData}
        sortData={sortData}
        setSortData={setSortData}
      ></FilterUser>
      <UserCard></UserCard>
    </div>
  );
};

export default Home;
