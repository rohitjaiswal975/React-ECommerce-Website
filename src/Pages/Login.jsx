import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const SubmitHandler = (e) => {
    e.preventDefault();


  }

  return (
    <form onSubmit={SubmitHandler} className="flex flex-col items-center w-[90%] max-w-md mx-auto mt-20 gap-6 p-8 bg-white rounded-2xl shadow-lg text-gray-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-semibold">{currentState}</h1>
        <hr className="flex-1 border-none h-[2px] bg-gray-800 rounded" />
      </div>

      {/* Name Input (only for Sign Up) */}
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="Name"
        />
      )}

      {/* Email Input */}
      <input
        type="email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="Email"
        required
      />

      {/* Password Input */}
      <input
        type="password"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="Password"
        required
      />

      {/* Links */}
      <div className="w-full flex justify-between text-sm mt-[-4px]">
        <p className="cursor-pointer text-indigo-500 hover:underline">Forgot Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-indigo-500 hover:underline"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-indigo-500 hover:underline"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Submit Button */}
        <button  className="w-full mt-4 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition">
          {
            currentState === "Login" ? "Sign In" :"Sing Up"
          }
        </button>
    </form>
  );
};

export default Login;
