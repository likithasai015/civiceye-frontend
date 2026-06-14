import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import TrackComplaint from "./pages/TrackComplaint";
import CommunityMap from "./pages/CommunityMap";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/report" element={<ReportIssue />} />

        <Route path="/track" element={<TrackComplaint />} />

        <Route path="/map" element={<CommunityMap />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;