import React, { useState } from "react";

const CreateCommunity = () => {
  const [coverImage, setCoverImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h2 className="text-4xl font-semibold text-white mb-6">
        Create a New Community
      </h2>
      <form className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 space-y-6">

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-white font-semibold">Cover Image</span>
          </label>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageUpload}
          />
        </div>
        {coverImage && (
          <div className="mb-4">
            <img
              src={coverImage}
              alt="Cover Preview"
              className="rounded-lg shadow-md object-cover w-full h-40"
            />
          </div>
        )}

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">
              Community Name
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full backdrop-blur-md text-white"
            placeholder="Enter community name"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">
              Description
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full  backdrop-blur-md text-white"
            placeholder="Describe your community..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-accent w-full">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCommunity;
