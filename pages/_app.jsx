import React from 'react';
import App from 'next/app';

const MyApp = ({ Component, pageProps, ...customProps }) => {
    return <Component {...pageProps} {...customProps} />;
};

// having a custom app with getInitialProps forces all pages to be rendered on the server
MyApp.getInitialProps = async (ctx) => {
    const appProps = App.getInitialProps(ctx);
    return {
        ...appProps,
        somePropFrom_app: "Hello from the _app"
    };
};

export default MyApp;