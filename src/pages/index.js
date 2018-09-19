import React from 'react';
import Layout from "../components/Layout";
import "../styles/index.less";

let today = new Date()

const IndexPage = () => (
  <Layout>
    <div className="page-index">
      <p>{today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}</p>
      <h1>STEFANUS THOBI SINAGA</h1>
      <h2>javascript web / mobile developer</h2>
    </div>
  </Layout>
)

export default IndexPage
