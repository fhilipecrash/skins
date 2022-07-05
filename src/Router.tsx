import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Skin } from "./pages/Skin";

export function Router() {
  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:skinid" element={<Skin />} />
    </Routes>
  )
}