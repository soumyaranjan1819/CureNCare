import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface CreateAccountModalProps {
  show: boolean;
  loginModalOpen: () => void;
  onClose: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
  loginModalOpen,
  onClose,
  show,
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal container */}
      <div className="bg-white p-6 rounded shadow-lg relative z-10 w-80">
        {/* Close icon at top-right */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4">Create Account</h2>
        <form autoComplete="off">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="new-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Mobile No
            </label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              autoComplete="new-mobile"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile no"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="new-email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-4">
            <button
              // type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create Account
            </button>
          </div>

          {/* Login prompt */}
          <div className="text-center">
            <span className="text-sm text-gray-700">
              Already have an account?{" "}
            </span>
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={loginModalOpen}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountModal;
