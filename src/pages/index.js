import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `160px`, margin: `0 auto` }}>
      <Image style={{borderRadius: `50%`}}/>
    </div>
    <h2>Web Application Architect</h2>
    <h3>Vancouver, BC</h3>
    <Link to="/resume/">Download resume</Link>
  </Layout>
)

export default IndexPage
