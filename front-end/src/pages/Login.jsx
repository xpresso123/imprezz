import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../apis/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await login(data.username, data.password);
      if (response.status === 200) {
        navigate("/");
        toast.success("Login successful");
      } else {
        setError(response.data.message);
        console.log("Login failed", response.data.message);
        toast.error("Login failed");
      }
    } catch (error) {
      setError(error.message);
      console.log("Login failed", error.message);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-gray-900 via-black to-gray-800 text-white">
      <div className="p-8 shadow-lg rounded-lg bg-gray-900 text-white w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">User Name</label>
            <input
              type="text"
              className={`input input-bordered w-full ${
                errors.username ? "border-red-500" : ""
              }`}
              placeholder="Enter your username"
                {...register("username", {
                    required: "Username is required",
                    validate: (value) => !/\s/.test(value) || "Username should not contain spaces",
                })}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              className={`input input-bordered w-full ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
