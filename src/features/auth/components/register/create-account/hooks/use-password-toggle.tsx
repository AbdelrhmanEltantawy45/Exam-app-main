"use client"
import { useState } from "react";

function useConfirmPasswordToggle() {
  const [showCofirmPassword, setShowCofirmPassword] = useState(false)

  const confirmInputType = showCofirmPassword ? "text" : "password";
  const confirmToggle = () => setShowCofirmPassword((prev) => !prev);

  return { confirmInputType, confirmToggle, showCofirmPassword };
}

export default useConfirmPasswordToggle;