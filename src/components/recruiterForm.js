import React from "react"

const RecruiterForm = _ => (
  <form
    name="recruiter-form"
    method="POST"
    data-netlify="true"
    action="/resume"
  >
    <input type="hidden" name="form-name" value="recruiter-form" />
    <div>
      <input
        required
        placeholder="Your name"
        type="text"
        name="name"
        minlength="1"
        maxlength="24"
      />
    </div>
    <div>
      <input required placeholder="Your email" type="email" name="email" />
    </div>
    <div>
      <button type="submit">View Résumé &#8227;</button>
    </div>
  </form>
)

RecruiterForm.propTypes = {}

RecruiterForm.defaultProps = {}

export default RecruiterForm
