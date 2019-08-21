// React
import React from 'react'

// React Semantic
import { Form, Input, Checkbox, Select, TextArea, Button } from 'semantic-ui-react'

export default function EditListingForm(props) {
  return (
    <div className="form edit-listing-form">
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
          <Form.Checkbox required label='By editing this resource, you agree Terms of Use as defined by the Crisis International Trust & Transparency documents.' />
        </Form.Field>
        <Form.Button type='submit'>Update</Form.Button>
      </Form>

      {props.successAlert &&
        <div>
          <p className="success-alert">This resource was successfully updated. <a href="/resources">Return to Resources</a></p>
        </div>
      }
      {props.errorAlert &&
        <p className="error-alert">Sorry, your request could not be processed.</p>}
    </div>
  )
}

