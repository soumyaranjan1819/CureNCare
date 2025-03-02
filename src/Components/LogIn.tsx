import React from "react";
import { FaTimes } from "react-icons/fa";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  createAccountModalOpen: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  createAccountModalOpen,
  onClose,
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

        <h2 className="text-xl font-bold mb-4 text-left">Login</h2>
        <form autoComplete="off">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
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
          {/* Login button with full width */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
          {/* Forgot password link */}
          <div className="mb-2 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password!
            </a>
          </div>
          {/* Sign up prompt */}
          <div className="text-center">
            <span className="text-sm text-gray-700">
              Don't have an account?{" "}
            </span>
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={createAccountModalOpen}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;