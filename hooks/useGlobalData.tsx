"use client";

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
  closeFn: () => void;
  isShowingWaitlistModal: boolean;
  handleStart: () => void;
  user: User | null;
};

export const globalDataContext = createContext<GlobalData>({
  closeFn: () => {},
  isShowingWaitlistModal: false,
  handleStart: () => {},
  user: null,
});

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isShowingWaitlistModal, setIsShowWaitlistModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const closeFn = () => {
    setIsShowWaitlistModal(false);
  };

  const openWaitlistModal = () => {
    setIsShowWaitlistModal(true);
  };

  const handleStart = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/auth");
    }
  };

  return (
    <globalDataContext.Provider
      value={{
        isShowingWaitlistModal,
        closeFn,
        user,
        handleStart,
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
