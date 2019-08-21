// React
import React from 'react'

// React Semantic
import { Form, Input, Checkbox, Select, TextArea, Button } from 'semantic-ui-react'

export default function CreateSponsorForm(props) {
  return (
    <div className="form create-sponsor-form">
      <Form
        onSubmit={props.handleSubmit}>
        <Form.Input
          fluid
          type='text'
          name='sponsor_name'
          id='sponsor_name'
          placeholder='Organization Name'
          onChange={props.handleChange}
          required
        />
        <Form.Group
          widths='equal'>
          <Form.Input
            fluid
            type='email'
            name='sponsor_email'
            id='sponsor_email'
            placeholder="Admin Email"
            onChange={props.handleChange}
            required
          />
          <Form.Input
            fluid
            type='password'
            name='password'
            id='password'
            placeholder="Admin Password"
            onChange={props.handleChange}
            required
          />
        </Form.Group>
        <Form.Checkbox
          label='By creating your account, you agree to the Terms and Conditions.'
          required
        />
        <Form.Button
          content='Submit New Sponsor'
        />
      </Form>

      {props.successAlert &&
        <div>
          <p className="success-alert">Your submission was successfully added. <a href="/sponsors">Return to sponsors?</a></p>
        </div>
      }
      {props.errorAlert &&
        <p className="error-alert">Sorry, your request could not be processed. This may be because your organization or email is already in use.</p>}
    </div>
  )
}
