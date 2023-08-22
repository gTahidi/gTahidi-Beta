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
  closeFn?: () => void;  // Make it optional using '?'
};


export const globalDataContext = createContext<GlobalData>({
  isShowingWaitlistModal: false,
  handleStart: () => {},
  closeFn: () => {},  // Add this line
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

  const closeFn = () => {
    setIsShowWaitlistModal(false);
  };

  return (
      <globalDataContext.Provider
        value={{
          isShowingWaitlistModal,
          handleStart,
          closeFn,
        }}
      >
        {children}
      </globalDataContext.Provider>
    );
};

export const useGlobalData = () => useContext(globalDataContext);
