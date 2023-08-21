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
  isShowingWaitlistModal: boolean;
  handleStart: () => void;
  notify: (message: string) => void;
};

export const globalDataContext = createContext<GlobalData>({
  isShowingWaitlistModal: false,
  handleStart: () => {},
  notify: () => {},
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

  const notify = (message: string) => toast(message);

  return (
    <globalDataContext.Provider
      value={{
        isShowingWaitlistModal,
        handleStart,
        notify,
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
