// React
import React from 'react'

export default function EditSponsorForm(props) {
  return (
    <div className="form edit-sponsor-form">
      <h2>Update {props.sponsor_name}</h2>
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
          type="submit"
          value="Submit Update" />
      </form>
      {props.successAlert &&
        <p className="success-alert">Your update was successfully processed.</p>}
      {props.errorAlert &&
        <p className="error-alert">Sorry, your request could not be processed.</p>}
      <button onClick={props.hideForm}>Close Form</button>
    </div>
  )
}
