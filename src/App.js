import React from "react"
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { AllBreeds } from "./pages/AllBreeds";
import { Register } from "./pages/Register";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<AllBreeds></AllBreeds>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/breed/details"} element={<AllBreeds></AllBreeds>}></Route>
      </Routes>
    </div>
  );
}

export default App;
