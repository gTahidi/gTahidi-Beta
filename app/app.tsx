import React from 'react';
import { GlobalDataProvider } from '../hooks/useGlobalData';
import type { AppProps } from 'next/app'; // Importing the AppProps type

function MyApp({ Component, pageProps }: AppProps) { // Using the AppProps type here
    return (
        <GlobalDataProvider>
            <Component {...pageProps} />
        </GlobalDataProvider>
    );
}

export default MyApp;
