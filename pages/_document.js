import React from "react";
// material
import { ServerStyleSheets } from "@material-ui/styles";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";

// ----------------------------------------------------------------------

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          /> */}
          <link rel="stylesheet" href="/fonts/style.css"/>
          <meta
            name="description"
            content="WHITEH Crypto Investments"
          />
          <meta
            name="keywords"
            content="whiteh,crypto,investments,bitcoin,cryptocoin,blockchain"
          />
          <meta name="apple-mobile-web-app-capable" content="yes">
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
