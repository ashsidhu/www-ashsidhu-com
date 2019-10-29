import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ExternalLink from "../components/externalLink"
import RecruiterForm from "../components/RecruiterForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `96px`, margin: `3rem auto` }}>
      <Image style={{ borderRadius: `50%` }} />
    </div>
    <code style={{ lineHeight: `2.4rem`, color: `#fca311` }}>
      <h3 style={{ lineHeight: `inherit`}}>Web Application Architect</h3>
    </code>
    <h3>Vancouver, BC</h3>
    <RecruiterForm />
    <br />
    <ExternalLink href="https://linkedin.com/in/ashsidhu/">
      linkedin.com/in/ashsidhu/
    </ExternalLink>
    <br />
    <ExternalLink href="https://twitter.com/meetashsidhu/">
      twitter.com/meetashsidhu/
    </ExternalLink>
    <br />
    <ExternalLink href="https://github.com/ashsidhu/">
      github.com/ashsidhu/
    </ExternalLink>
  </Layout>
)

export default IndexPage
