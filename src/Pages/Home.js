import React, { useEffect, useState } from "react";
import FilterUser from "../Components/FilterUser";
import UserCard from "../Components/UserCard";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [sortData, setSortData] = useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  console.log("Home data", searchData, sortData);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.users);
          console.log(result.users);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (!isLoaded) {
    return (
      <div className="text-center mt-20 text-sky-600">
        <span className="loading loading-dots loading-lg inline-block"></span>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-20">
      <FilterUser
        searchData={searchData}
        setSearchData={setSearchData}
        sortData={sortData}
        setSortData={setSortData}
      ></FilterUser>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 justify-center">
        {items.map((item) => (
          <UserCard key={item.id} item={item}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
