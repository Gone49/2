import React from "react";

const LoginForm = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-gray-900"
    >
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?healthcare,technology')",
          transform: "scale(1.1)",
          filter: "blur(3px)",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-700 via-transparent to-gray-900 opacity-80"></div>

      {/* Login Form */}
      <div className="relative bg-white/90 rounded-xl shadow-xl p-8 max-w-md w-full z-10 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back!
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-cyan-500 focus:border-cyan-400 transition"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-cyan-500 focus:border-cyan-400 transition"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 focus:ring-cyan-500"
              />
              Remember me
            </label>
            <a href="/forgot-password" className="text-cyan-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-cyan-500 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

