"use client";

import { useRouter } from "next/router";
import React, { createContext, useContext, useState, useEffect } from "react";

export const DEFAULT_PRICE = {
    currency: "USD",
    basic: 49,
    advanced: 69,
};

type GlobalData = {
    isShowingWaitlistModal: boolean;
    handleStart: () => void;
    closeFn: () => void;
};

const initialGlobalData: GlobalData = {
    isShowingWaitlistModal: false,
    handleStart: () => { },
    closeFn: () => { },
};

export const globalDataContext = createContext<GlobalData>(initialGlobalData);

interface GlobalDataProviderProps {
    children: React.ReactNode;
}

export const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({ children }) => {
    const [isShowingWaitlistModal, setIsShowWaitlistModal] = useState(false);

    // Conditionally use useRouter
    const router = typeof window !== 'undefined' ? useRouter() : undefined;

    useEffect(() => {
        // Check if router is defined before using it
        const handleStart = () => {
            if (router) {
                router.push("/dashboard");
            }
        };
        handleStart();
    }, [router]);

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

};

export const useGlobalData = () => useContext(globalDataContext);
