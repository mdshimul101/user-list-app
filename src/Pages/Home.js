import React, { useEffect, useState } from "react";
import FilterUser from "../Components/FilterUser";
import UserCard from "../Components/UserCard";
import UserFormData from "../Components/UserFormData";

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
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // Sort Users by name, email and company
  const sortedUsers = [...items].sort((a, b) => {
    switch (sortData) {
      case "name":
        return a.firstName.localeCompare(b.firstName);
      case "email":
        return a.email.localeCompare(b.email);
      case "company":
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });

  // filter Users by SearchTerm
  const filteredUsers = sortedUsers.filter(
    (item) =>
      item.firstName
        .concat(" ", item.lastName)
        .toLowerCase()
        .includes(searchData.toLocaleLowerCase())
    // item.firstName.toLowerCase().includes(searchData.toLowerCase()) ||
    // item.lastName.toLowerCase().includes(searchData.toLowerCase())
  );

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
        setSortData={setSortData}
      ></FilterUser>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 justify-center">
        {filteredUsers.map((item) => (
          <UserCard key={item.id} item={item}></UserCard>
        ))}
      </div>

      <UserFormData items={items} setItems={setItems}></UserFormData>
    </div>
  );
};

export default Home;
