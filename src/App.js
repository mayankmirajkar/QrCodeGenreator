import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Home, Profile, ShowQR, ShowProfile } from "./pages";

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
