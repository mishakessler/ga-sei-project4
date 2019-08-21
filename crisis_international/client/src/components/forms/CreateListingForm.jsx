// React
import React from 'react'

// React Semantic
import { Form, Input, Checkbox, Select, TextArea, Button } from 'semantic-ui-react'

export default function CreateListingForm(props) {
  return (
    <div className="form create-sponsor-form">
      <Form
        onSubmit={props.handleSubmit}>
        <Form.Input
          fluid
          type='text'
          name='listing_name'
          placeholder='Resource Name'
          onChange={props.handleChange}
          required
        />
        <Form.Input
          fluid
          type='text'
          name='listing_tagline'
          placeholder='Resource Tagline'
          onChange={props.handleChange}
          required
        />
        <Form.TextArea
          fluid
          type='text'
          name='listing_desc'
          placeholder='Resource Description'
          onChange={props.handleChange}
          required
        />
        <Form.Group
          widths='equal'>
          <Form.Input
            fluid
            type='text'
            name='listing_category'
            placeholder="Resource Category"
            onChange={props.handleChange}
            required
          />
          <Form.Input
            fluid
            type='text'
            name='password'
            placeholder="Resource "
            onChange={props.handleChange}
            required
          />
        </Form.Group>
        <Form.Field>
          <Checkbox
            label='By creating your account, you agree to the Terms and Conditions.'
            required />
        </Form.Field>
        <Button type='submit'>Submit New Sponsor</Button>
      </Form>

      {props.successAlert &&
        <p className="success-alert">Your submission was successfully added.</p>}
      {props.errorAlert &&
        <p className="error-alert">Sorry, your request could not be processed.</p>}
    </div>
  )
}

