import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp(props) {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const users = props.users;
  const setUsers = props.setUsers;

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!uname.trim() || !email.trim() || !pass || !confirmPass) {
      setError("Please fill in all fields!");
      return;
    }

    if (pass !== confirmPass) {
      setError("Passwords do not match!");
      return;
    }

    if (users.some((user) => user.uname === uname.trim())) {
      setError("Username already exists!");
      return;
    }

    const newUser = {
      uname: uname.trim(),
      email: email.trim(),
      password: pass,
    };

    setUsers([...users, newUser]);

    setError("");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white bg-white p-6 shadow-xl sm:p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-lg">
            🔐
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign up to get started.
          </p>
        </div>

        {/* Login / Sign Up tabs */}
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
          <Link
            to="/login"
            className="w-1/2 rounded-md py-2 text-center font-medium text-gray-500 transition hover:text-indigo-600"
          >
            Login
          </Link>

          <button
            type="button"
            className="w-1/2 rounded-md bg-white py-2 font-semibold text-indigo-600 shadow"
          >
            Sign Up
          </button>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={uname}
              onChange={(e) => {
                setUname(e.target.value);
                setError("");
              }}
              autoComplete="username"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                setError("");
              }}
              autoComplete="new-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
                setError("");
              }}
              autoComplete="new-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Secure Sign Up Experience
        </p>
      </div>
    </div>
  );
}
export default SignUp;
