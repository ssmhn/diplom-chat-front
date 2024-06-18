import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// contexts
import SettingsProvider from "./contexts/SettingsContext";

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);

    root.render(
        <React.StrictMode>
            <HelmetProvider>
                <SettingsProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </SettingsProvider>
            </HelmetProvider>
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
