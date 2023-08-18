"use client";

import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";

export const SignInWithMicrosoftButton = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (loginType: "popup" | "redirect") => {
    setIsLoggingIn(true);

    //acquiring token
    try {
      const response = await axios.get("/api/signin");
      console.log(response);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setIsLoggingIn(false);
  };

  return (
    <div
      className="flex p-3 rounded bg-white w-full text-sm mt-2 justify-center cursor-pointer"
      onClick={() => handleLogin("popup")}
    >
      <p>Continue with</p>
      <FontAwesomeIcon
        icon={faMicrosoft}
        className="w-5 h-5 ml-2"
        spin={isLoggingIn}
      />
    </div>
  );
};
