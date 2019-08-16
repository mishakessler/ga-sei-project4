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
      {props.submitError &&
        <p className="error-alert">Sorry, your request could not be processed.</p>}
      <button onClick={props.hideForm}>Close Form</button>
    </div>
  )
}

