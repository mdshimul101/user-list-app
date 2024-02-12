import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
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

  return (
    <div className="space-y-4 my-20">
      <h3 className="my-6 text-center font-semibold text-2xl md:text-3xl text-gray-600">
        {user.firstName} {user.lastName} Details
      </h3>
      <div className="border hover:border-gray-500 duration-200 rounded-lg p-4 md:p-10 block md:flex ">
        <div className="basis-1/2 border-b-sky-200 border-r-sky-200 border-b-2 md:border-b-0 md:border-r-2">
          <img
            src={user.image}
            alt="Avatar"
            className="w-16 h-16 rounded-full mx-auto my-2"
          />
          <h3 className="text-[#212529] text-center text-xl md:text-2xl font-medium my-5 hover:text-sky-600">
            {user.firstName} <span> </span>
            {user.lastName}
          </h3>
        </div>

        <div className="basis-1/2 mt-4 ml-4">
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

      <Link to="/">
        <div className="mt-10 py-2 flex items-center justify-center border rounded-full  w-4/12 md:w-3/12 lg:w-2/12 text-center border-sky-500  md:text-xl font-semibold text-sky-500">
          <IoMdArrowRoundBack />
          <button className="ml-2">Back</button>
        </div>
      </Link>
    </div>
  );
};

export default UserDetails;
