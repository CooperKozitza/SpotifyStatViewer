import { Router } from "next/router";
import React from "react";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "@/app/store";

const App = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default App;