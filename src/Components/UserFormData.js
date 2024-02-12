import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
const UserFormData = ({ items, setItems }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    company: {
      name: "",
    },
    address: {
      address: "",
      city: "",
    },
  });

  // set next user id
  const nextUserId = (items) => {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...newUser };

    // If the input belongs to the company and address  object
    if (name.includes("company.")) {
      const companyKey = name.split(".")[1];
      updatedFormData.company[companyKey] = value;
    }
    if (name.includes("address.")) {
      const addressKey = name.split(".")[1];
      updatedFormData.address[addressKey] = value;
    } else {
      updatedFormData[name] = value;
    }

    setNewUser(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new user to the items state
    setItems([...items, { ...newUser, id: nextUserId(items) }]);
    // Reset the form fields
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      company: {
        name: "",
      },
      address: {
        address: "",
        city: "",
      },
    });
  };
  return (
    <div className="group">
      <div>
        <h1 className="mt-20 md:mt-32 text-gray-600 text-center text-2xl md:text-3xl font-semibold">
          Make A New User
        </h1>
        <div className="flex justify-center items-center ">
          <span className="border-b-2 border-sky-600 w-20 group-hover:w-32 ease-out duration-300  text-center mt-3"></span>
        </div>
      </div>

      <div className="mt-10 bg-sky-50 p-10">
        <form onSubmit={handleSubmit} action="">
          <div className=" lg:flex justify-between">
            <div className="w-full mx-auto md:w-10/12 lg:w-[47%]">
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={newUser.firstName}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />

              <input
                type="text"
                name="lastName"
                placeholder="LastName"
                value={newUser.lastName}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newUser.image}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />
            </div>
            <div className="w-full mx-auto md:w-10/12 lg:w-[47%]">
              <input
                type="text"
                name="company.name"
                placeholder="Company Name"
                value={newUser.company.name}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />
              <input
                type="text"
                name="address.city"
                placeholder="City"
                value={newUser.address.city}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />
              <input
                type="text"
                name="address.address"
                placeholder="Street"
                value={newUser.address.address}
                onChange={handleInputChange}
                required
                className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-sky-400 duration-300"
              />
            </div>
          </div>
          <div className="flex justify-center w-6/12 md:w-3/12 lg:w-2/12 mx-auto items-center mt-10 bg-sky-300 hover:bg-sky-500 font-semibold text-white">
            <FaRegUser className="hidden md:block" />

            <button type="submit" className="px-3 py-2">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormData;
