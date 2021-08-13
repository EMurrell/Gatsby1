import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I made this page using the Layout component</p>
      <StaticImage alt="My initials" src="../images/em.jpg" />
    </Layout>
  );
};

export default IndexPage;
