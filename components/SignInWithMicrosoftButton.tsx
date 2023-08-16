"use client";

import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SignInWithMicrosoftButton = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  console.log(isAuthenticated);

  const handleLogin = (loginType: "popup" | "redirect") => {
    //yes
  };

  return (
    <div
      className="flex p-3 rounded bg-white w-full text-sm mt-2 justify-center cursor-pointer"
      onClick={() => handleLogin("popup")}
    >
      <p>Continue with</p>
      <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-5 ml-2" />
    </div>
  );
};
