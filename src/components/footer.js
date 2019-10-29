import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <h6>© {siteTitle}, {new Date().getFullYear()}</h6>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
