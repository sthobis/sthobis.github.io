import Document, { Html, Head, Main, NextScript } from "next/document";

// const gTagScript = `window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'UA-107058891-2');`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Stefanus Thobi Sinaga" />
          <meta property="og:url" content="https://sthobis.github.io" />
          <meta property="og:site_name" content="Stefanus Thobi Sinaga" />
          <meta property="og:title" content="Stefanus Thobi Sinaga" />
          <meta property="og:description" content="Personal Site" />
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-107058891-2"
          />
          <script dangerouslySetInnerHTML={{ __html: gTagScript }} /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:800|Ropa+Sans:400,400i"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
