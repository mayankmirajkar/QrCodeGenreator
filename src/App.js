import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import ShowQR from "./pages/showQR/showQR";
import ShowProfile from "./pages/showprofile/showprofile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/showqr" element={<ShowQR />} />
        <Route path="/showprofile" element={<ShowProfile />} />
      </Routes>
    </div>
  );
}

export default App;
