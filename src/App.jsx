import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import './App.css';
import { ForgotPassword } from "./pages/ForgotPassword";
import { ChangeProfile } from "./pages/ChangeProfile";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot_password' element={<ForgotPassword />} />
          <Route path='change_profile' element={<ChangeProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
