import App, { Container } from "next/app";
import React from "react";
import Layout from "../components/Layout";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, pathname: ctx.pathname };
  }

  render() {
    const { Component, pageProps, pathname } = this.props;

    return (
      <Container>
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
