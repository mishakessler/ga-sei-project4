import React from 'react'

export default function CreateSponsorForm(props) {
  return (
    <div className="form create-sponsor-form">
      <h2>Add Your Organization</h2>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          name="sponsor_name"
          type="text"
          placeholder="Organization Name" />
        <input
          onChange={props.handleChange}
          name="sponsor_email"
          type="email"
          placeholder="Email" />
        <input
          onChange={props.handleChange}
          name="password_digest"
          type="password" placeholder="Password" />
        <input
          type="submit"
          value="Submit Sponsor" />
      </form>
      {props.submitError &&
        <p className="error-alert">Sorry, your request could not be processed.</p>}
      <button onClick={props.hideForm}>Close Form</button>
    </div>
  )
}
