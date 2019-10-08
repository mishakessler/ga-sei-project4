class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :listing_name
      t.text :listing_tagline
      t.text :listing_desc
      t.string :listing_industry
      t.string :listing_category
      t.string :listing_url_to_img
      t.string :listing_medium
      t.string :listing_age
      t.string :listing_population
      t.string :listing_language
      t.string :listing_hours
      t.string :listing_email
      t.string :listing_phone
      t.string :listing_sms
      t.string :listing_url
      t.string :listing_address
      t.string :listing_city
      t.string :listing_region
      t.string :listing_country
      t.string :listing_coverage
      t.references :sponsors
      
      t.timestamps
    end
  end
end
