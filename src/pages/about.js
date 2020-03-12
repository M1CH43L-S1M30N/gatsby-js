import React from 'react'
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About"/>
      <h1>About</h1>
      <p>Over the past 50 years, generational wealth has been created in two ways - through homeownership and financial assets. 
        Black and minority communities have been left out the conversation. Twilight looks to close wealth gaps by helping put
         you on the path to homeownership and helping you invest for wealth building.</p>
      <Link to="/services">Services</Link>
    </Layout>
  )
}

export default AboutPage;
