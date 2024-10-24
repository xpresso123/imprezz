import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../apis/auth";
import toast from "react-hot-toast";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await signup(data.name, data.email, data.password);
      if (response.status === 201) {
        navigate("/");
        toast.success("Signup successful");
      } else {
        setError(response.data.message);
        console.log("Signup failed", response.data.message);
        toast.error("Signup failed");
      }
    } catch (error) {
      setError(error.message);
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-gray-900 via-black to-gray-800">
      <div className="p-8 shadow-lg rounded-lg bg-gray-900 text-white w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              className={`input input-bordered w-full text-white ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Enter username"
              {...register("name", {
                required: "Name is required",
                validate: (value) =>
                  !/\s/.test(value) || "Name should not contain spaces",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              className={`input input-bordered w-full text-white ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              className={`input input-bordered w-full text-white ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm">Confirm Password</label>
            <input
              type="password"
              className={`input input-bordered w-full text-white ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
