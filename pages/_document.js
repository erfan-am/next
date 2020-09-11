import Document, { Html, Head, NextScript, Main } from "next/document";
class myApp extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myApp;
