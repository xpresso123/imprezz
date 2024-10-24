import React, { useState } from 'react';

const NewTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    xp: '',
    links: '',
    proofFormat: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Created:', taskData);
    alert('Task created successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-gray-900 via-black to-gray-800 text-white p-10 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Create New Task</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Task Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Task Description</span>
            </label>
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Prize in XP</span>
            </label>
            <input
              type="number"
              name="xp"
              value={taskData.xp}
              onChange={handleChange}
              placeholder="Enter XP prize"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Important Links</span>
            </label>
            <input
              type="text"
              name="links"
              value={taskData.links}
              onChange={handleChange}
              placeholder="Enter important links (if any)"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Proof Required</span>
            </label>
            <select
              name="proofFormat"
              value={taskData.proofFormat}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select proof format
              </option>
              <option value="screenshot">Screenshot</option>
              <option value="video">Video</option>
              <option value="link">Link</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTaskForm;
