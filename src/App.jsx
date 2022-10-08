import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/Auth";
import { Protect } from "./Protect";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Protect>
                  <Home />
                </Protect>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
