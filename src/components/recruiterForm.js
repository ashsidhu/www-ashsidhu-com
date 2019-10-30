import React from "react"

const RecruiterForm = _ => (
  <form
    name="recruiter-form"
    method="POST"
    data-netlify="true"
    action="/resume"
  >
    <input type="hidden" name="form-name" value="recruiter-form" />
    <div style={{ position: `relative`}}>
      <input style={{padding: `0 164px 0px 12px`}} required placeholder="Your email" type="email" name="email" />
      <button
        style={{ position: `absolute`, width: `152px`, right: 0, top: 0 }}
        type="submit"
      >
        View Résumé &#8227;
      </button>
    </div>
  </form>
)

RecruiterForm.propTypes = {}

RecruiterForm.defaultProps = {}

export default RecruiterForm
