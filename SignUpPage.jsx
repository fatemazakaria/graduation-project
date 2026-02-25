// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import ForgetPassword from "./ForgetPassword";
import OTPPage from "./OTPPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-otp" element={<OTPPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
