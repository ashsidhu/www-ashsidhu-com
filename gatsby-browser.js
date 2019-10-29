/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (location.pathname === "/resume") {
    setTimeout(_ => (window.location.href = process.env.GATSBY_RESUME_URL), 999)
  }
}
