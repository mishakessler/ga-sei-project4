import React from 'react'

export default function CreateSponsorForm(props) {
  return (
    <div className="form create-sponsor-form">
      <h2>Add Your Organization</h2>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} name="name" type="text" placeholder="Organization Name" /> <br />
        <input onChange={props.handleChange} name="email" type="email" placeholder="Email" /><br />
        <input onChange={props.handleChange} name="password" type="password" placeholder="Password" /> <br />
        <input type="submit" value="Add Resource" />
      </form>
    </div>
  )
}
