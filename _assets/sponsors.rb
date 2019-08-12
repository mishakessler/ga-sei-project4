class CreateSponsors < ActiveRecord::Migration[5.2]
  def change
    create_table :sponsors do |t|
      t.string :sponsor_name, null: false
      t.string :sponsor_email, null: false
      t.string :password_digest, null: false
      t.text :sponsor_tagline
      t.string :sponsor_website
      t.string :sponsor_phone
      t.string :sponsor_address
      t.string :sponsor_city
      t.string :sponsor_region
      t.string :sponsor_country

      t.timestamps
    end
    add_index :sponsors, :sponsor_name, unique: true
    add_index :sponsors, :sponsor_email, unique: true
  end
end
