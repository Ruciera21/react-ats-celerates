import Login from "./pages/auth/Login-page";
import Register from "./pages/auth/Register-page";
import Home from "./pages/home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
