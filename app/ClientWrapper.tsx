import React, { ReactNode } from "react";
import { initializeMsal } from "../msalConfig";

// Flag to check if MSAL has been initialized
let isMsalInitialized = false;

// Function to ensure MSAL is initialized only once
function initializeMsalOnce() {
    if (isMsalInitialized) return;

    initializeMsal();
    isMsalInitialized = true;
}

// Higher-Order Component for MSAL initialization
function withMsalInitialization<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return function MsalEnhancedComponent(props: P) {
        initializeMsalOnce();

        return <WrappedComponent {...props} />;
    }
}
// Your original ClientWrapper component
interface ClientWrapperProps {
    children: ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
    return <>{children}</>;
};

// Exporting the wrapped version of ClientWrapper with MSAL initialization
export default withMsalInitialization(ClientWrapper);
