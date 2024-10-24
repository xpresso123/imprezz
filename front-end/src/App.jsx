// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExploreCommunity from "./pages/ExploreCommunity";
import YourCommunity from "./pages/YourCommunity";
import CreateCommunity from "./pages/CreateCommunity";
import CommunityDetails from "./pages/CommunityDetails";
import TaskDetails from "./pages/TaskDetails";
import NewTaskForm from "./pages/NewTaskForm";

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-radial from-gray-900 via-black to-gray-800 min-h-screen text-white">
        <Navbar />
        <div className="container mx-auto mt-[60px] pt-6 p-4">
          <Routes>
            <Route path="/" element={<ExploreCommunity />} />
            <Route path="/your-community" element={<YourCommunity />} />
            <Route path="/create-community" element={<CreateCommunity />} />
            <Route path="/details" element={<CommunityDetails />} />
            <Route path="/task" element={<TaskDetails />} />
            <Route path="/taskform" element={<NewTaskForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
