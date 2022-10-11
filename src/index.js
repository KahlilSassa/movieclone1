import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const user = (null);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {user ? (
          <Route exact path="/login" element={<Login />}></Route>
        ) : (
          <Route exact path="/" element={<HomeScreen />}></Route>
        )}
      </Routes>
      {/* {!user ? (
        <Login exact path="/login" />
      ) : (
        <Routes>
          <Route path="/home" element={<HomeScreen />}></Route>
        </Routes>
      )} */}
    </Router>
  </React.StrictMode>
);
