// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExploreCommunity from "./pages/ExploreCommunity";
import YourCommunity from "./pages/YourCommunity";
import CreateCommunity from "./pages/CreateCommunity";
import CommunityDetails from "./pages/CommunityDetails";
import TaskDetails from "./pages/TaskDetails";
import NewTaskForm from "./pages/NewTaskForm";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Router>
      <div className="bg-gradient-radial from-gray-900 via-black to-gray-800 min-h-screen text-white">
        <Navbar />
        <Toaster/>
        <div className="container mx-auto mt-[60px] pt-6 p-4">
          <Routes>
            <Route path="/" element={<ExploreCommunity />} />
            <Route path="/your-community" element={<YourCommunity />} />
            <Route path="/create-community" element={<CreateCommunity />} />
            <Route path="/details" element={<CommunityDetails />} />
            <Route path="/task" element={<TaskDetails />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/taskform" element={<NewTaskForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
