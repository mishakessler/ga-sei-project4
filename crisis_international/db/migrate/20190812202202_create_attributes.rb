class CreateAttributes < ActiveRecord::Migration[5.2]
  def change
    create_table :attributes do |t|
      t.string :attribute_name
      t.string :attribute_category
      t.string :attribute_icon
      t.references :listings
      t.timestamps
    end
  end
end
