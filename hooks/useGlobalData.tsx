"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { createContext, useContext, useState } from "react";
import { User } from "../types";
import { toast } from "react-toastify";

export const DEFAULT_PRICE = {
  currency: "USD",
  basic: 49,
  advanced: 69,
};

type GlobalData = {
  handleStart: () => void;
  notify: (message: string) => void;
};

export const globalDataContext = createContext<GlobalData>({
  handleStart: () => {},
  notify: () => {},
});

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleStart = () => {
    // Initiate the Azure AD B2C sign-in/sign-up process
    signIn("azure-ad-b2c", { redirect: true, callbackUrl: "/dashboard" });
  };

  const notify = (message: string) => toast(message);

  return (
    <globalDataContext.Provider
      value={{
        handleStart,
        notify,
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};


export const useGlobalData = () => useContext(globalDataContext);
