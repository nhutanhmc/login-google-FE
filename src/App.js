import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import AuthRedirect from "./AuthRedirect";
import Status from "./Status";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/authGoogle" element={<AuthRedirect />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  );
}

export default App;
