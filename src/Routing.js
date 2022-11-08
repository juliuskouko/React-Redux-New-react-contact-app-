import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
					path="/"
					element={
						
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
						
					}
				/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
