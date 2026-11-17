"use client"
import { useState } from "react";

function usePasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : "password";
  const toggle = () => setShowPassword((prev) => !prev);

  return { inputType, toggle, showPassword };
}

export default usePasswordToggle;