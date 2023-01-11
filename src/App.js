import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { AllBreeds } from "./pages/AllBreeds";
import { Register } from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { Requiredauth } from "./requiredauth/Requiredauth";
import { BreedDetail } from "./pages/BreedDetail";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path={"/"}
          element={
            <Requiredauth>
              <AllBreeds></AllBreeds>
            </Requiredauth>
          }
        ></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route
          path={"/details/:breed"}
          element={
            <Requiredauth>
              <BreedDetail></BreedDetail>
            </Requiredauth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
