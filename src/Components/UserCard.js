import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ item }) => {
  const { image, firstName, lastName, email, address, company } = item;
  return (
    <div className=" group border hover:border-gray-500 duration-200 rounded-lg p-4">
      <img
        src={image}
        alt="Avatar"
        className="w-16 h-16 rounded-full mx-auto my-2"
      />
      <Link to={`/item/${item.id}`}>
        <h3 className="text-[#212529] text-center text-2xl font-medium mt-4 hover:text-sky-700">
          {firstName} <span> </span>
          {lastName}
        </h3>
        <div className="flex justify-center items-center ">
          <span className="border-b-2 border-sky-600 w-0 group-hover:w-32 ease-out duration-300  text-center my-2"></span>
        </div>
      </Link>
      <p className="text-gray-600 my-3">
        <span className="text-gray-700 font-semibold">Email : </span> {email}
      </p>
      <p className="text-gray-600 mb-3">
        <span className="text-gray-700 font-semibold">Address : </span>{" "}
        {address.address}, {address.city}
      </p>
      <p className="text-gray-600 mb-3">
        <span className="text-gray-700 font-semibold"> Company Name : </span>
        {company.name}
      </p>
    </div>
  );
};

export default UserCard;
