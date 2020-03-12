import React from 'react'
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <h1>Services</h1>
      <p>Managing money is HARD. Our APP is built on principles we believe everyone should rely on. 
        We make managing money take less effort. We meet you where you are and find ways to help you cut back on overspending,
        pay bills on-time (or early), and help you grow your money faster.</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default ServicesPage;
