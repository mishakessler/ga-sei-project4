import React from 'react'

export default function EditSponsorForm(props) {
  return (
    <div className="form edit-sponsor-form">
      <h2>Edit {props.sponsor_name}</h2>
      <form onSubmit={props.handleSubmit}>

        <input type="submit" value="Edit Sponsor" />
      </form>
      {props.submitError && <p className="error-alert">Sorry, your request could not be processed.</p>}
      <button onClick={props.hideForm}>Close Form</button>
    </div>
  )
}
