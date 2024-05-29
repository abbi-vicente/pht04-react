import React, { useState } from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import Counter from "./pages/Counter";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
