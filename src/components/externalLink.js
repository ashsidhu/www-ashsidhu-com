import PropTypes from "prop-types"
import React from "react"

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children} &#8227;
  </a>
)
ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
}

ExternalLink.defaultProps = {
  href: ``,
  children: ``,
}

export default ExternalLink
