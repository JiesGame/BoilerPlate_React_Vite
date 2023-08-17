import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import './App.css';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='register' element={<Register />}></Route>
          <Route path='connexion' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
