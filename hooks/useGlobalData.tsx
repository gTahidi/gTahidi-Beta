"use client";

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
  openWaitlistModal: () => void;
  user: User | null;
};

export const globalDataContext = createContext<GlobalData>({
  closeFn: () => {},
  isShowingWaitlistModal: false,
  openWaitlistModal: () => {},
  user: null,
});

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isShowingWaitlistModal, setIsShowWaitlistModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const closeFn = () => {
    setIsShowWaitlistModal(false);
  };

  const openWaitlistModal = () => {
    setIsShowWaitlistModal(true);
  };

  return (
    <globalDataContext.Provider
      value={{
        isShowingWaitlistModal,
        closeFn,
        openWaitlistModal,
        user,
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
