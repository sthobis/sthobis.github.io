import Document, { Head, Main, NextScript } from "next/document";

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
      <html lang="en">
        <Head>
          <meta name="description" content="Stefanus Thobi Sinaga" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            href="https://fonts.googleapis.com/css?family=Raleway:800|Ropa+Sans"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
