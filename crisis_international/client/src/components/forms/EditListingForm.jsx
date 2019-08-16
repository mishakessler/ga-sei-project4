import React from 'react'

export default function EditListingForm(props) {
  return (
    <div className="form edit-listing-form">
      <h2>Edit {props.listing_name}</h2>
      <form onSubmit={props.handleSubmit}>

        <input type="submit" value="Edit Resource" />
      </form>
      {props.submitError && <p className="error-alert">Sorry, your request could not be processed.</p>}
      <button onClick={props.hideForm}>Close Form</button>
    </div>
  )
}

