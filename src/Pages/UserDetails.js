import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        return console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!user) {
    return (
      <div className="text-center mt-20 text-sky-600">
        <span className="loading loading-dots loading-lg inline-block"></span>
      </div>
    );
  }
  console.log(user);

  return (
    <div className="space-y-4 my-20">
      <h3 className="text-center font-semibold text-xl md:text-2xl text-sky-600">
        {user.firstName} {user.lastName} Details
      </h3>
      <div className="border hover:border-gray-500 duration-200 rounded-lg p-4 md:p-10 block md:flex ">
        <div className="basis-1/2">
          <img
            src={user.image}
            alt="Avatar"
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <h3 className="text-[#212529] text-center text-xl md:text-2xl font-medium my-5 hover:text-blue-700">
            {user.firstName} <span> </span>
            {user.lastName}
          </h3>
        </div>

        <div className="basis-1/2 mt-4">
          <p className="text-gray-600 mb-3">
            <span className="text-gray-700 font-semibold">Email : </span>{" "}
            {user.email}
          </p>
          <p className="text-gray-600 mb-3">
            <span className="text-gray-700 font-semibold">Address : </span>{" "}
            {user.address.address}, {user.address.city}
          </p>
          <p className="text-gray-600 mb-3">
            <span className="text-gray-700 font-semibold">
              {" "}
              Company Name :{" "}
            </span>
            {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
