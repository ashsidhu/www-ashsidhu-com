import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/externalLink"

const SecondPage = () => (
  <Layout>
    <SEO title="Ashmeet's resume" />
    <h2>Thanks for your interest.</h2>
    <h3>
      Redirecting you to{" "}
      <ExternalLink href={process.env.GATSBY_RESUME_URL}>
        Ashmeet's resume
      </ExternalLink>
    </h3>
    <Link to="/">Go back to homepage</Link>
  </Layout>
)

export default SecondPage
