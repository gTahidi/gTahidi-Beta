"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { createContext, useContext, useState } from "react";
import { User } from "../types";

export const DEFAULT_PRICE = {
  currency: "USD",
  basic: 49,
  advanced: 69,
};

type GlobalData = {
  isShowingWaitlistModal: boolean;
  handleStart: () => void;
};

export const globalDataContext = createContext<GlobalData>({
  isShowingWaitlistModal: false,
  handleStart: () => {},
});

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isShowingWaitlistModal, setIsShowWaitlistModal] = useState(false);

  const router = useRouter();

  const handleStart = () => {
    router.push("/dashboard");
  };

  return (
    <globalDataContext.Provider
      value={{
        isShowingWaitlistModal,
        handleStart,
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
