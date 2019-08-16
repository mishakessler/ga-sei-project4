import React from 'react'

export default function CreateListingForm(props) {
  return (
    <div className="form create-listing-form">
      <h2>Add Your Resource</h2>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          name="listing_name"
          type="text"
          placeholder="Resource Name" />
        <input
          onChange={props.handleChange}
          name="listing_email"
          type="email"
          placeholder="Email" />
        <input
          type="submit"
          value="Submit Resource" />
      </form>
      {props.submitError &&
        <p className="error-alert">Sorry, your request could not be processed.</p>}
      <button onClick={props.hideForm}>Close Form</button>
    </div>
  )
}

