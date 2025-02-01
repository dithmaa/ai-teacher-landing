import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Quiz from "./pages/quiz";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path={"/"} />
        <Route element={<Quiz />} path={"/quiz"} />
      </Routes>
    </Router>
  </StrictMode>
);
