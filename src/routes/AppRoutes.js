import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NewRecipe from "../pages/NewRecipe";
import Navbar from "../subcomponents/Navbar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navbar><Home /></Navbar>} />
      <Route path="/new-recipe" element={<Navbar><NewRecipe /></Navbar>} />
    </Routes>
  );
}

export default AppRoutes;
