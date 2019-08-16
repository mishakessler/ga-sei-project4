import React from 'react'

export default function EditListingForm(props) {
  return (
    <div className="form edit-listing-form">
      <h2>Update {props.listing_name}</h2>
      <form onSubmit={props.handleSubmit}>

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

