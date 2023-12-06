// import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import MyCollege from "./components/MyCollege";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyCollege />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
