import { Router } from "next/router";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "@/app/store";
import RootLayout from "@/app/layout";

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])
    
    return (
        <Provider store={store}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </Provider>
    )
};

export default App;