import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LogIn(props) {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const users = props.users;  

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.uname === uname.trim() && u.password === pass
    );

    if (user) {
      navigate("/landing", {
        state: { uname: user.uname },
      });
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Welcome back
        </h1>

        <p className="mb-8 text-center text-sm text-gray-500">
          Please enter your details to sign in.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              value={uname}
              onChange={(e) => {
                setUname(e.target.value);
                setError("");
              }}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                setError("");
              }}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
