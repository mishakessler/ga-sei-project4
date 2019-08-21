// React
import React from 'react'

// React Semantic
import { Form, Divider } from 'semantic-ui-react'

const industryOptions = [
  { key: 'Suicide Prevention', text: 'Suicide Prevention', value: 'Suicide Prevention' },
]

const categoryOptions = [
  { key: 'Hotline', text: 'Hotline', value: 'Hotline' },
  { key: 'Warmline', text: 'Warmline', value: 'Warmline' },
  { key: 'Textline', text: 'Textline', value: 'Textline' },
  { key: 'Webchat', text: 'Webchat', value: 'Webchat' },
  { key: 'Hospital', text: 'Hospital', value: 'Hospital' },
  { key: 'Peer Respite', text: 'Peer Respite', value: 'Peer Respite' },
  { key: 'Mobile Response Team', text: 'Mobile Response Team', value: 'Mobile Response Team' },
  { key: 'Crisis Intervention Team', text: 'Crisis Intervention Team', value: 'Crisis Intervention Team' },
  { key: 'General Emergency Resource', text: 'General Emergency Resource', value: 'General Emergency Resource' },
  { key: 'General Non-Emergency Resoure', text: 'General Non-Emergency Resoure', value: 'General Non-Emergency Resoure' },
  { key: 'Social Media Forum', text: 'Social Media Forum', value: 'Social Media Forum' },
  { key: 'Support Group', text: 'Support Group', value: 'Support Group' },
]

const ageOptions = [
  { key: 'Youth & Young Adults', text: 'Youth & Young Adults', value: 'Youth & Young Adults' },
]

const populationOptions = [
  { key: 'Persons of Color', text: 'Persons of Color', value: 'Persons of Color' },
]

const regionOptions = [
  { key: 'New York', text: 'New York', value: 'New York' },
]

const countryOptions = [
  { key: 'United States of America', text: 'United States of America', value: 'United States of America' },
]

const coverageOptions = [
  { key: 'National', text: 'National', value: 'National' },
  { key: 'Regional', text: 'Regional', value: 'Regional' },
  { key: 'Statewide', text: 'Statewide', value: 'Statewide' },
  { key: 'Local', text: 'Local', value: 'Local' },
]

export default function EditListingForm(props) {
  return (
    <div className="form edit-listing-form">
      <Form
        onSubmit={props.handleSubmit}>
        <Divider horizontal>Overview</Divider>
        <Form.Input
          type='text'
          id='listing_name'
          name='listing_name'
          placeholder='Resource Name'
          fluid
          required
          onChange={props.handleChange}
        />
        <Form.Input
          type='text'
          id='listing_tagline'
          name='listing_tagline'
          placeholder='Resource Tagline'
          fluid
          required
          onChange={props.handleChange}
        />
        <Form.TextArea
          type='text'
          id='listing_desc'
          name='listing_desc'
          placeholder='Resource Description'
          fluid
          required
          onChange={props.handleChange}
        />
        <Divider horizontal>Attributes</Divider>
        <Form.Group
          widths='equal'>
          <Form.Dropdown
            name='listing_industry'
            id='listing_industry'
            placeholder="Resource Industry"
            options={industryOptions}
            fluid
            search
            selection
            clearable
            required
            onChange={props.handleChange}
          />
          <Form.Dropdown
            name='listing_category'
            id='listing_category'
            placeholder="Resource Category"
            options={categoryOptions}
            fluid
            search
            selection
            clearable
            required
            onChange={props.handleChange}
          />
        </Form.Group>

        <Divider horizontal>Demographics</Divider>

        <Form.Group
          widths='equal'>
          <Form.Dropdown
            name='listing_age'
            id='listing_age'
            placeholder="Ages"
            options={ageOptions}
            fluid
            search
            selection
            multiple
            allowAdditions
            clearable
            required
            onChange={props.handleChange}
          />
          <Form.Dropdown
            name='listing_population'
            id='listing_population'
            placeholder="Populations"
            options={populationOptions}
            fluid
            search
            selection
            multiple
            allowAdditions
            clearable
            required
            onChange={props.handleChange}
          />
        </Form.Group>

        <Divider horizontal>Location</Divider>

        <Form.Input
          name='listing_address'
          id='listing_address'
          placeholder="Address"
          fluid
          required
          onChange={props.handleChange}
        />
        <Form.Group
          widths='equal'>
          <Form.Input
            name='listing_city'
            id='listing_city'
            placeholder="City"
            fluid
            required
            onChange={props.handleChange}
          />
          <Form.Dropdown
            name='listing_region'
            id='listing_region'
            placeholder="Region or State"
            options={regionOptions}
            fluid
            search
            selection
            clearable
            required
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group
          widths='equal'>
          <Form.Dropdown
            name='listing_country'
            id='listing_country'
            placeholder="Country"
            options={countryOptions}
            fluid
            search
            selection
            allowAdditions
            clearable
            required
            onChange={props.handleChange}
          />
          <Form.Dropdown
            name='listing_coverage'
            id='listing_coverage'
            placeholder="Coverage"
            options={coverageOptions}
            fluid
            search
            selection
            allowAdditions
            clearable
            required
            onChange={props.handleChange}
          />
        </Form.Group>

        <Divider horizontal>Contact Information</Divider>

        <Form.Group
          widths='equal'>
          <Form.Input
            type='tel'
            name='listing_phone'
            id='listing_phone'
            placeholder="Phone Number"
            fluid
            onChange={props.handleChange}
          />
          <Form.Input
            name='listing_sms'
            id='listing_sms'
            placeholder="Text Number"
            fluid
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group
          widths='equal'>
          <Form.Input
            type='url'
            name='listing_website'
            id='listing_website'
            placeholder="Website"
            fluid
            onChange={props.handleChange}
          />
          <Form.Input
            type='email'
            name='listing_email'
            id='listing_email'
            placeholder="Email Address"
            fluid
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Field>
          <Form.Field required label='By editing this resource, you agree Terms of Use as defined by the Crisis International Trust & Transparency documents.' />
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

