import React from "react";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <div className="border hover:border-gray-500 duration-200 rounded-lg p-4">
      <img
        src="https://robohash.org/Terry.png?set=set4"
        alt="Avatar"
        className="w-16 h-16 rounded-full mx-auto mb-2"
      />
      <Link>
        <h3 className="text-[#212529] text-center text-2xl font-medium my-5 hover:text-blue-700">
          Terry Medhurst
        </h3>
      </Link>
      <p className="text-gray-600 mb-3">
        <span className="text-gray-700 font-semibold">Email : </span>{" "}
        atuny0@sohu.com
      </p>
      <p className="text-gray-600 mb-3">
        <span className="text-gray-700 font-semibold">Address : </span> 1745 T
        Street Southeast, Washington
      </p>
      <p className="text-gray-600 mb-3">
        <span className="text-gray-700 font-semibold"> Company Name : </span>
        Blanda-O'Keefe
      </p>
    </div>
  );
};

export default UserCard;
