"use client";

import React from "react";
import { createContext, useContext, useState } from "react";

export const DEFAULT_PRICE = {
  currency: "USD",
  basic: 49,
  advanced: 69,
};

type GlobalData = {
  closeFn: () => void;
  isShowingWaitlistModal: boolean;
  openWaitlistModal: () => void;
};

export const globalDataContext = createContext<GlobalData>({
  closeFn: () => {},
  isShowingWaitlistModal: false,
  openWaitlistModal: () => {},
});

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isShowingWaitlistModal, setIsShowWaitlistModal] = useState(false);

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
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
