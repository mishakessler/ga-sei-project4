class CreateCrisisResources < ActiveRecord::Migration[5.2]
  def change
    create_table :crisis_resources do |t|
      t.string :crisis_resource_name
      t.text :crisis_resource_tagline
      t.text :crisis_resource_desc
      t.string :crisis_resource_industry
      t.string :crisis_resource_category
      t.string :crisis_resource_medium
      t.string :crisis_resource_age
      t.string :crisis_resource_population
      t.string :crisis_resource_language
      t.string :crisis_resource_hours
      t.string :crisis_resource_email
      t.string :crisis_resource_phone
      t.string :crisis_resource_sms
      t.string :crisis_resource_url
      t.string :crisis_resource_address
      t.string :crisis_resource_city
      t.string :crisis_resource_region
      t.string :crisis_resource_country
      t.string :crisis_resource_coverage
      t.references :sponsor, foreign_key: true

      t.timestamps
    end
  end
end
